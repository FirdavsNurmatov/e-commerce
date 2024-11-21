import Joi from "joi";

export const ordersSchema=Joi.object({
    id:Joi.number().integer().min(1),
    user_id:Joi.number().integer().min(1).required(),
    cart_id:Joi.number().integer().min(1).required(),
    created_at:Joi.date(),
    updated_at:Joi.date()
})