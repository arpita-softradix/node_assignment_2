import Logger from '../../helpers/logger';
import { RESPONSE_CODES,emailCredientials } from '../../../config/constants';
import { AUTH_CUSTOM_MESSAGES } from '../../../config/customMessages';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
const Sequelize = require('sequelize');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(emailCredientials.key);
const https = require('https');
var request = require('request');
export default class Email {
    async init(db) {
        this.logger = new Logger();
        await this.logger.init();
        this.Models = db.models;
    }

    async sendEmailToVeriftOtp(email, otp){
        try{
            var readHTMLFile = function (path, callback) {
                fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
                    if (err) {
                        console.log("error",err)
                        throw err;
                    }
                    else {
                        callback(null, html);
                    }
                });
            };

            readHTMLFile('views/templates/verifyOtp.html', (err, html) => {
                console.log("hrml",html)
                var template = ejs.compile(html);

                var replacements = {
                    title: `Verify email.`,
                    message: "Here is your otp to verify your email " + `${otp}`
                };

                var htmlToSend = template(replacements);
                const msg = {
                    to: email,
                    from: emailCredientials.username, // Use the email address or domain you verified above
                    subject: `OTP - Verify email`,
                    html: htmlToSend,
                };
                sgMail
                    .send(msg)
                    .then((res) => { console.log(res) }, error => {
                        console.error(error);

                        if (error.response) {
                            console.error(error.response.body)
                        }
                    });
            });
        }catch (error){
            console.log("error",error)
            // this.logger.logError("Send OTP  error", error);
            // throw error;
        }
    }
}