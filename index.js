import { Buffer } from "buffer"; 

const sendSMS = async (SERVICE_SID,ACCOUNT_SID,AUTH_TOKEN, PHONENUMBER) => {
    try {
        const params = new URLSearchParams();
        params.append("To", phoneNumber);
        params.append("Channel", "sms");
    
        const response = await fetch(`https://verify.twilio.com/v2/Services/${SERVICE_SID}/Verifications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64")}`
        },
        body: params.toString()
        });
    
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return false;
    }
};
      


module.exports = sendSMS;
  