
import { startAuthentication } from '@simplewebauthn/browser';
import { Button } from '@/components/ui/button';

export default function LoginButton() {

  return(
    <Button variant="outline" onClick={AuthenticationProcess}>
      Authenticate
    </Button>

  )
}


async function AuthenticationProcess() { 
  const authdomain = "localhost:8080"
  const USERNAME = "testUser";

  const res = await fetch(`https://${authdomain}/login/${USERNAME}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    credentials: "include"
  });

  try {
      // Pass the options to the authenticator and wait for a response
      let authedResponse = await startAuthentication(await res.json().then((r) => r.publicKey));
      const authed_verif_response = await fetch(`https://${authdomain}/login_finish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authedResponse),
      mode: "cors",
      credentials: "include"
    });

    const AuthenticationStatus = authed_verif_response.status;
    if (AuthenticationStatus == 200) {
        console.log("Logged in successfully with passkey!");
      } else {
        console.warn("Login Unsuccessful");
      }
  } catch (error) {
      // Some basic error handling
      console.error(error);
      throw error;
    }

}
