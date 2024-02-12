ARG RUST_VERSION=1.76.0
ARG BINARY_NAME

FROM rust:${RUST_VERSION}-slim-bookworm AS builder
WORKDIR /astro_backend
RUN apt-get update -y && apt-get install -y libssl-dev ca-certificates pkg-config

COPY . .
RUN cargo build --release

EXPOSE 8080/tcp
CMD ["./target/release/astro_backend"]
