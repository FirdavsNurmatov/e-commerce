import { logger } from "../utils/logger.js"
import {register,login} from "../services/index.js"
import {createToken} from "../utils/Token/index.js"

// malumotlarni obyect korinishida berib yuborsa ham bolar edi bu yerda hammasini alohida alohida berib hato qilingan
// funksiyalr orasidan ko'proq joy qilinganda maqsadga muvofiq bolar edi

export const registerCon=async(req,res)=>{
    try {
        const {email,name,password,role,phone_number,is_active,birth_of_date,avatar,username}=req.body
        const result=await register(email,name,password,role,phone_number,is_active,birth_of_date,avatar,username)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}
export const loginCon=async(req,res)=>{
    try {
        const {email,password}=req.body
        const result=await login(email,password)
        const role=result[0].role
        const accessToken=await createToken({email,role})
        if(result=="User topilmadi"){
            res.status(200).send(result)
        }else{
            res.status(200).send({result,accessToken})
        }
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}
