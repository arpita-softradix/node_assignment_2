import Joi from 'joi';

module.exports = {

    // userRegisterValidator: Joi.object().keys({
    //     name: Joi.string().required().error(() => 'name is required'),
    //     email: Joi.string().email().required().error(() => 'email is required'),
    //     dob: Joi.date().raw().required().error(() => 'dob is required and should be in YYYY-MM-DD format'),
    //     permanent_address: Joi.string().optional(),
    //     current_address: Joi.string().optional(),
    //     phone_number: Joi.string().length(10).pattern(/^[0-9]+$/).required().error(() => 'phone number is required'),
    //     alternate_phone_number: Joi.string().optional(),
    //     joining_date: Joi.date().raw().format('YYYY-MM-DD').required().error(() => 'joining date is required and should be in YYYY-MM-DD format'),
    //     probation: Joi.string().optional(),
    //     probation_end_date: Joi.date().format('YYYY-MM-DD').optional(),
    //     aadhar_no: Joi.string().required().error(() => 'aadhar number is required'),
    //     pan_no: Joi.string().required().error(() => 'pan number is required'),
    // }),


};