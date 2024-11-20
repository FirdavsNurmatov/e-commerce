import { logger } from "../utils/logger.js"
export const registermiddleware=(schema)=>{
    return (req,res,next)=>{
        const {name,email,password,role,phone_number,is_active,birth_of_date,avatar,username} =req.body
        const {error}=schema.validate({name,email,password,role,phone_number,is_active,birth_of_date,avatar,username})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const loginmiddleware=(schema)=>{
    return (req,res,next)=>{
        const {email,password} =req.body
        const {error}=schema.validate({email,password})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const updateusermiddleware=(schema)=>{
    return (req,res,next)=>{
        const {email}=req.params
        const {name,password,role,phone_number,is_active,birth_of_date,avatar,username} =req.body
        const {error}=schema.validate({name,email,password,role,phone_number,is_active,birth_of_date,avatar,username})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}