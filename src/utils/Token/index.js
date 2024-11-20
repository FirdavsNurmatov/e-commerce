import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const createToken=async({email,role})=>{
    const payload={email,role}
    const ttl={
        expiresIn:process.env.JWT_ACCESS_EXPIRES_IN
    }
    const secretkey=process.env.JWT_ACCESS_SECRET
    const result=jwt.sign(payload,secretkey,ttl)
    return result
}
