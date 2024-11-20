import { logger } from "../utils/logger.js";

export const checkproductdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {category_id,title,picture,summary,description,price,discount_type,discount_value,tags}=req.body
        const {error}=schema.validate({category_id,title,picture,summary,description,price,discount_type,discount_value,tags})
        if(error){
            logger.error(error)
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }

    }
}

export const updateproductdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {category_id,title,picture,summary,description,price,discount_type,discount_value,tags}=req.body
        const {error}=schema.validate({category_id,title,picture,summary,description,price,discount_type,discount_value,tags,id})
        if(error){
            logger.error(error)
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }

    }
}