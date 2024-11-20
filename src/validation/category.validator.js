import Joi from "joi";

export const categoryvalidator=Joi.object({
    id:Joi.number().integer(),
    name:Joi.string().min(5).required(),
    description:Joi.string().min(5).required(),
    tag:Joi.string().min(3).required(),
    created_at:Joi.date(),
    updated_at:Joi.date()
})