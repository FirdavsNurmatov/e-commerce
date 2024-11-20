import { logger } from "../utils/logger.js"
import {getusers,getuserbyemail,deleteuserbyemail,updateuser} from "../services/index.js" 
export const updateCon=async(req,res)=>{
    try {
        const {email}=req.params
        const {name,password,role,phone_number,is_active,birth_of_date,avatar,username}=req.body
        const result=await updateuser({name,password,role,phone_number,is_active,birth_of_date,avatar,username,email})
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}

export const getAllusers=async(req,res)=>{
    try {
        const result=await getusers()
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}

export const deleteuserByemail=async(req,res)=>{
    try {
        const {email}=req.params
        const result=await deleteuserbyemail(email)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}

export const getuserbyEmail=async(req,res)=>{
    try {
        const {email}=req.params
        const result=await getuserbyemail(email)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}