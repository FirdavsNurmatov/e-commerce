import Joi from "joi"

export const uservalidator=Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().min(10).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required(),
    role:Joi.string(),
    phone_number:Joi.string().min(7).required(),
    is_active:Joi.boolean(),
    birth_of_date:Joi.date().required(),
    avatar:Joi.string().required(),
    username:Joi.string().min(5).required()
})

export const loginvalidator=Joi.object({
    email:Joi.string().min(10).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required(),
})

