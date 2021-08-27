import moment from "moment-timezone";
import { smsCredientials } from '../../config/constants';
var twilio = require('twilio');
const accountSid = smsCredientials.ACCOUNT_SID;
const authToken = smsCredientials.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


export const isValidEmail = async(payload) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	  if (payload.match(regexEmail)) {
	    return true; 
	  } else {
	    return false; 
	  }
}

export const isValidPhoneNumber = async(payload)=>{
	var phoneno = /^\d{10}$/;
  if(payload.match(phoneno)){
  	return true
  }else{
  	return false
  }
}

export const currentDateTime = async(type = null) => {
    let todayDate;
    if(type==1){
        todayDate=moment().tz("UTC").add(5, 'm').format('x');
    }else if(type==2){
        todayDate=moment().tz("UTC").format('x');
    }else{
        todayDate=moment().tz("UTC").format('YYYY-MM-DD HH:mm:ss');
    }
    return todayDate;
}

export const sendSMS = async (phoneNumber, otp) => {
    try {
        let content = 'To verify your phone-number please enter the otp ' + otp;
        const message = await client.messages.create({
            body: content,
            from: smsCredientials.SMS_FROM,
            to: phoneNumber,
        });
        return message;
    } catch (error) {
      return error;
    }
}
