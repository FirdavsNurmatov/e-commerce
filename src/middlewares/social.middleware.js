import { logger } from "../utils/logger.js";

export const checksocialsprofiledata=(schema)=>{
    return (req,res,next)=>{
        const {user_id,platform,platform_user}=req.body
        const {error}=schema.validate({user_id,platform,platform_user})
        if(error){
            logger.error(error)
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const updatesocialsprofiledata=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {user_id,platform,platform_user}=req.body
        const {error}=schema.validate({user_id,platform,platform_user})
        if(error){
            logger.error(error)
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
