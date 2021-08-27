import config from 'config';
import path from 'path';
import winston from 'winston';
import { RESPONSE_CODES,emailCredientials } from '../../config/constants';
import fs from 'fs';
import ejs from 'ejs';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(emailCredientials.key);

export default class Logger {
  constructor() {
    this.logFileName = path.join(__dirname, '../../', 'logs/ashwani-app-builder.app.log');
    this.errorLogFileName = path.join(__dirname, '../../', 'logs/ashwani-app-builder.error.log');
    this.logger = null;
    // this.email = path.join(__dirname, '../', 'services/email/email');
  }

  async init() {
    this.logger = winston.createLogger({
      format: winston.format.json(),
      exceptionHandlers: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: this.errorLogFileName,
          level: 'error',
          maxSize: config.logger.maxSize,
          maxFiles: config.logger.maxFiles,
        }),
      ],
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: this.logFileName,
          maxSize: config.logger.maxSize,
          maxFiles: config.logger.maxFiles,
        }),
      ],
    });
  }

  logInfo(message, data) {
    this.logger.log('info', message, data);
  }

  logError(message, data) {
    this.logger.log('error', message, data);
  }

  logWarn(message, data) {
    this.logger.log('warn', message, data);
  }

  logDebug(message, data) {
    this.logger.log('debug', message, data);
  }

  logSilly(message, data) {
    this.logger.log('silly', message, data);
  }

  async sendEmailToVeriftOtp(message, data){
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

            readHTMLFile('views/templates/errorEmailToAdmin.html', (err, html) => {
                console.log("hrml",html)
                var template = ejs.compile(html);

                var replacements = {
                    title: `Error`,
                    data: data,
                    message:message
                };

                var htmlToSend = template(replacements);
                const msg = {
                    to: email,
                    from: emailCredientials.username, // Use the email address or domain you verified above
                    subject: `Error`,
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
