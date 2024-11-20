import { logger } from "../utils/logger.js";

export const checkreviewdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {user_id,product_id,rating,comment,created_at,update_at}=req.body
        const {error}=schema.validate({user_id,product_id,rating,comment,created_at,update_at})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const updatereviewdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {user_id,product_id,rating,comment,created_at,update_at}=req.body
        const {error}=schema.validate({id,user_id,product_id,rating,comment,created_at,update_at})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}