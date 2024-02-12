use core::panic;
use std::path::PathBuf;

use actix_session::SessionMiddleware;
use actix_web::cookie::Key;
use actix_web::middleware::Logger;
use actix_web::web::JsonConfig;
use actix_web::web::{get, post};
use actix_web::http;
use actix_web::{App, HttpServer};
use actix_cors::Cors;
use log::info;

use std::{fs::File, io::BufReader};
use rustls::{Certificate, PrivateKey, ServerConfig};
use rustls_pemfile::{certs, pkcs8_private_keys};

use crate::handler::auth::{
    finish_authentication, finish_register, start_authentication, start_register,
};
use crate::handler::index::index;
use crate::handler::serve_wasm::{serve_wasm, WASM_DIR};
use crate::session::MemorySession;
use crate::startup::startup;

mod handler;
mod session;
mod startup;

#[tokio::main]
async fn main() {
    if std::env::var("RUST_LOG").is_err() {
        std::env::set_var("RUST_LOG", "info");
    }

    // Initialize env-logger
    env_logger::init();

    // Generate secret key for cookies.
    // Normally you would read this from a configuration file.
    let key = Key::generate();

    let (webauthn, webauthn_users) = startup();

    // if !PathBuf::from(WASM_DIR).exists() {
    //     panic!("{} does not exist, can't serve WASM files.", WASM_DIR);
    // } else {
    //     info!("Found WASM files OK");
    // }
    let config = load_rustls_config();
    // Build the webserver and run it
    info!("Listening on: http://0.0.0.0:8080");
    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("https://localhost:4321")
            .supports_credentials()
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT, http::header::CONTENT_TYPE, http::header::ORIGIN, http::header::X_FORWARDED_PROTO, http::header::REFERER])
            .max_age(3600);

        App::new()
            .wrap(Logger::default())
            .wrap(
                SessionMiddleware::builder(MemorySession, key.clone())
                    .cookie_name("webauthnrs".to_string())
                    .cookie_content_security(actix_session::config::CookieContentSecurity::Private)
                    .cookie_http_only(true)
                    .cookie_secure(true)
                    .build(),
            )
            .wrap(cors)
            .app_data(JsonConfig::default())
            .app_data(webauthn.clone())
            .app_data(webauthn_users.clone())
            // .route("/", get().to(index))
            // .route("/pkg/{filename:.*}", get().to(serve_wasm))

            // TODO: ensure you cant just hit this endpoint and endlessly register.
            .route("/register/{username}", post().to(start_register))
            .route("/register_start/{username}", post().to(start_register)) // legacy


            .route("/submit-registration", post().to(finish_register))
            .route("/register_finish", post().to(finish_register)) // legacy

            .route("/login/{username}", post().to(start_authentication))
            .route("/login_start/{username}", post().to(start_authentication)) // legacy

            .route("/login_finish", post().to(finish_authentication))
    })
    .bind_rustls_021("0.0.0.0:8080", config)
    .expect("Failed to start a listener on 0.0.0.0:8080")
    
    .run()
    .await
    .unwrap();
}


fn load_rustls_config() -> ServerConfig {
    // init server config builder with safe defaults
    let config = ServerConfig::builder()
        .with_safe_defaults()
        .with_no_client_auth();

    // load TLS key/cert files
    let cert_file = &mut BufReader::new(File::open("cert.pem").unwrap());
    let key_file = &mut BufReader::new(File::open("key.pem").unwrap());

    // convert files to key/cert objects
    let cert_chain = certs(cert_file)
        .unwrap()
        .into_iter()
        .map(Certificate)
        .collect();
    let mut keys: Vec<PrivateKey> = pkcs8_private_keys(key_file)
        .unwrap()
        .into_iter()
        .map(PrivateKey)
        .collect();

    // exit if no keys could be parsed
    if keys.is_empty() {
        eprintln!("Could not locate PKCS 8 private keys.");
        std::process::exit(1);
    }

    config.with_single_cert(cert_chain, keys.remove(0)).unwrap()
}
