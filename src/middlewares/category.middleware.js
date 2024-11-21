import { logger } from "../utils/logger.js";

export const checkcategorydatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {name,description,tag,created_at,updated_at}=req.body
        const {error}=schema.validate({name,description,tag,created_at,updated_at})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
            // res.status(400).send(error.message)
        }else{
            next()
        }
    }
}

export const updatecategorydatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {name,description,tag,created_at,updated_at}=req.body
        const {error}=schema.validate({id,name,description,tag,created_at,updated_at})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}