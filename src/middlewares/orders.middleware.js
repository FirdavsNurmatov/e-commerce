import { logger } from "../utils/logger.js";

export const Checkordersdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {user_id,cart_id,created_at,updated_at}=req.body
        const {error}=schema.validate({user_id,cart_id,created_at,updated_at})
        if(error){
            logger.error(error.message)
            res.status(400).send("Ma'lumot to'liqmas")
            res.status(400).send(error.message)
        }else{
            next()
        }
    }
}

export const Updateordersdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {user_id,cart_id,created_at,updated_at}=req.body
        const {error}=schema.validate({user_id,cart_id,created_at,updated_at,id})
        if(error){
            logger.error(error.message)
            res.status(400).send("Ma'lumot to'liqmas")
            res.status(400).send(error.message)
        }else{
            next()
        }
    }
}