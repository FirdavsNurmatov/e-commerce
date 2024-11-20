import Joi from "joi";

export const checkaddressdatavalidate=Joi.object({
    user_id:Joi.number().integer().min(1).required(),
    title:Joi.string().min(5).required(),
    created_at:Joi.string(),
    address_line_1:Joi.string().min(5).required(),
    address_line_2:Joi.string().min(5).required(),
    country:Joi.string().min(5).required(),
    city:Joi.string().min(4).required(),
    postal_code:Joi.string().min(5).required(),
    phone_number:Joi.number().integer().min(7).required(),
    landmark:Joi.string().min(5).required()
})