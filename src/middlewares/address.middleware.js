import { logger } from "../utils/logger.js";

export const checkaddressdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark}=req.body
        const {error}=schema.validate({user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark})
        if(error){
            logger.error(error)
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const updateaddressdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=+req.params
        const {user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark}=req.body
        const {error}=schema.validate({user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark})
        if(error){
            logger.error(error)
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
