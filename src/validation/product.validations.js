import Joi from "joi";

export const productdatavalidator=Joi.object({
    category_id:Joi.number().integer().min(1).required(),
    title:Joi.string().min(5).required(),
    price:Joi.number().integer().required(),
    picture:Joi.string().min(5).required(),
    summary:Joi.string().min(5).required(),
    description:Joi.string().min(5).required(),
    discount_type:Joi.string().min(5).required(),
    discount_value:Joi.string().min(2).required(),
    tags:Joi.string().min(5).required(),
    id:Joi.number().integer().min(1)
})