import Joi from "joi";

export const reviewSchema=Joi.object({
    id:Joi.number().integer().min(1),
    user_id:Joi.number().integer().min(1).required(),
    product_id:Joi.number().integer().min(1).required(),
    rating:Joi.string().min(5).required(),
    comment:Joi.string().min(5).required(),
    created_at:Joi.date(),
    updated_at:Joi.date()
})