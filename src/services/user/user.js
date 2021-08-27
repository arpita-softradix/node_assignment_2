import Logger from '../../helpers/logger';
import { RESPONSE_CODES, accessRoles, STRIPE_SECRET_KEY, aws, API_BASE_URL } from '../../../config/constants';
import { CUSTOM_MESSAGES } from '../../../config/customMessages';
import { refreshToken, verifyToken, generateHash } from '../../helpers/jwt';
import bcrypt from 'bcrypt';
import { isValidEmail, isValidPhoneNumber, currentDateTime, sendSMS, sendEmailToVeriftOtp } from '../../helpers/commonFunctions';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require("fs");


export default class User {
    async init(db) {
        this.logger = new Logger();
        await this.logger.init();
        this.Models = db.models;
    }

    async imageUpload(fileData) {
        console.log("----------: ", fileData);

        try {
            let response = {};

            if (fileData == undefined) {
                response.code = RESPONSE_CODES.NOT_FOUND;
                response.message = `You must select a file.`;
                return response;
            };

            let saveUserProfile = await this.Models.Users_profile_image.create({
                type: fileData.mimetype,
                name: fileData.originalname,
                data: fs.readFileSync(
                    fileData.path
                ),
            }).then((file) => {
                fs.writeFileSync(
                    file.name,
                    file.data
                );
                response.code = RESPONSE_CODES.POST;
                response.message = `File has been uploaded.`;
                response.data = file.dataValues;
                console.log("----- response -----: ", response);
                return response;
            });

        } catch (error) {
            console.log("---- error --- : ",error);
            response.code = RESPONSE_CODES.NOT_FOUND;
            response.message = `Error when trying upload images: ${error}`;
            return response;

        }
    }
}


