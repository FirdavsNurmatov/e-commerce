import Joi from "joi";

export const checksocialvalidator=Joi.object({
    user_id:Joi.number().integer().min(1).required(),
    platform:Joi.string().min(3).required(),
    platform_user:Joi.string().min(3).required()
})