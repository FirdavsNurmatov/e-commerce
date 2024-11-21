import Joi from "joi";

export const cartSchema=Joi.object({
    id:Joi.number().integer().min(1),
    user_id:Joi.number().integer().min(1).required(),
    total:Joi.number().integer().min(1).required(),
    created_at:Joi.date(),
    updated_at:Joi.date()
})

export const cartItemSchema=Joi.object({
    id:Joi.number().integer().min(1),
    cart_id:Joi.number().integer().min(1).required(),
    product_id:Joi.number().integer().min(1).required(),
    quantity:Joi.string().min(5).required(),
    created_at:Joi.date(),
    updated_at:Joi.date()
})
