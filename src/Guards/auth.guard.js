import { logger } from "../utils/logger.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const authGuard = (req, res, next) => {
    try {

        const [type, token] = req.headers.authorization.split(" ")
        console.log(type,token)
        if (!type == "Bearer" || !token) {
            logger.info("Login qilishingiz kerak")
            res.status("Login qilishingiz kerak")
        }

        const secretkey = process.env.JWT_ACCESS_SECRET
        jwt.verify(token, secretkey, (err, decode) => {
            if (err) {
                logger.error(err.message)
                return res.status(400).send(err.message)
            }
            req.user = decode
            logger.info(decode.role)
        })
        next()
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}






















// const secretkey = process.env.JWT_ACCESS_SECRET

// const func=(token)=>{
//     jwt.verify(token, secretkey, (err, decode) => {
//         if (err) {
//             logger.error(err)
//             res.status(400).send(err.message)
//         }
//         logger.info(decode.role)
//     })
// }


// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRveHNzaXJtYWxrQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMxNzM1OTA2LCJleHAiOjE3MzE3MzY1MDZ9.oujWmzEShEdwrq8xltfhNzZ__r_z9bTTZoVaMgr7bO0"

// func(token)