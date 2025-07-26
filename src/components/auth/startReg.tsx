import { startRegistration } from '@simplewebauthn/browser';
import { Button } from '@/components/ui/button';

export default function startReg() {

  return(
    <Button variant="outline" onClick={RegistrationF}>
      Register
    </Button>

  )
}


async function RegistrationF() {
  const authdomain = "localhost:8080"
  const USERNAME = "testUser";

  const res = await fetch(`https://${authdomain}/register_start/${USERNAME}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  credentials: "include"
});  
  
  try {
    let attResp = await startRegistration(await res.json().then((r) => r.publicKey));
    console.info(attResp);

    let webauthn_rs_json = {
      extensions: {},
      id: attResp.id,
      rawId: attResp.rawId,
      response: {
        attestationObject: attResp.response.attestationObject,
        clientDataJSON: attResp.response.clientDataJSON,
        transports: null
      },
      type: attResp.type
    }
    let authObj = JSON.stringify(webauthn_rs_json)
    console.warn(authObj)
    const verificationResp = await fetch(`https://${authdomain}/register_finish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: authObj,
      credentials: "include"
    });

    const verificationStatus = verificationResp.status;

    // Show UI appropriate for the `verified` status
    if (verificationStatus == 200) {
      console.warn("Verification Sucessful! you are registered.")
    } else {
      console.error(`Verification of Registration unsuccessfull, you are not registered. (${verificationStatus})`)
    }
  } catch (error) { 
    console.log("fucl")
    console.error(error);
    return
  }

}
