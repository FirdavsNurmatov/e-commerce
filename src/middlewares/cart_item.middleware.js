import { logger } from "../utils/logger.js";


export const CheckcartItemmiddleware=(schema)=>{
   return(req,res,next)=>{
    const {cart_id,product_id,quantity,created_at,updated_at}=req.body
    const {error}=schema.validate({cart_id,product_id,quantity,created_at,updated_at})
    if(error){
        logger.error(error.message)
        res.status(400).send("Ma'lumot to'liqmas")
    }else{
        next()
    }
   }
}


export const updatecartItemmiddleware=(schema)=>{
    return(req,res,next)=>{
    const {id}=req.params
     const {cart_id,product_id,quantity,created_at,updated_at}=req.body
     const {error}=schema.validate({cart_id,product_id,quantity,created_at,updated_at,id})
     if(error){
         logger.error(error.message)
        //  res.status(400).send("Ma'lumot to'liqmas")
         res.status(400).send(error.message)
     }else{
         next()
     }
    }
 }
 