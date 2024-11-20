import { logger } from "../utils/logger.js";


export const Checkcartmiddleware=(schema)=>{
   return(req,res,next)=>{
    const {user_id,total,created_at,updated_at}=req.body
    const {error}=schema.validate({user_id,total,created_at,updated_at})
    if(error){
        logger.error(error.message)
        res.status(400).send("Ma'lumot to'liqmas")
    }else{
        next()
    }
   }
}


export const updatecartmiddleware=(schema)=>{
    return(req,res,next)=>{
    const {id}=req.params
     const {user_id,total,created_at,updated_at}=req.body
     const {error}=schema.validate({id,user_id,total,created_at,updated_at})
     if(error){
         logger.error(error.message)
        //  res.status(400).send("Ma'lumot to'liqmas")
         res.status(400).send(error.message)
     }else{
         next()
     }
    }
 }
 