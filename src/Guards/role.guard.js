import {logger} from "../utils/logger.js"

export const roleGuard=(roles)=>{
    return (req,res,next)=>{
        const {role}=req.user
        if(roles.includes(role)){
            next()
        }else{
            logger.error("Sizga ruxsat etilmaydi")
            res.status(400).send("Sizga ruxsat etilmaydi")
        }
    }
}