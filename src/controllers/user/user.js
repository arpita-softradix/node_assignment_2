import { RESPONSE_CODES } from '../../../config/constants';
import Logger from "../../helpers/logger";
import Services from '../../services/user/user';
import { validator } from '../../helpers/schemaValidator';
import { CUSTOM_MESSAGES } from '../../../config/customMessages';
import { userRegisterValidator } from '../../validators/user/user';
import { response } from 'express';

export default class User {
    async init(db) {
        this.services = new Services();
        this.logger = new Logger();
        this.Models = db.models;
        await this.services.init(db);
        await this.logger.init();
    }

    async userImageUpload(req, res) {
        try {
            const file = req.file;
            // const body = req.body;
            console.log("---- file ---- :", file);
            // console.log("---- body ---- :", body);

            const imageStatus = await this.services.imageUpload(file);
            console.log("----- imageStatus -----: ", imageStatus);

            return res.status(imageStatus.code).json(imageStatus);
        } catch (error) {
            return res.json({
                status: 0,
                message: CUSTOM_MESSAGES.ERROR,
                code: RESPONSE_CODES.SERVER_ERROR,
                error: error.message
            });
        }
    }


}