import { logger } from "../utils/logger.js";
import {getaddresses,getaddresByid,deleteaddressByid, createaddress, updateaddressByid} from "../services/index.js" 
export const getAlladdresscon=async(req,res)=>{
    try {
        const result=await getaddresses()
        res.send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}

export const getaddressByIdcon=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await getaddresByid(id)
    
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}

export const Createaddresscon=async(req,res)=>{
    try {
        const {user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark}=req.body
        const result=await createaddress(user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark)
    
        res.send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}

export const Updateaddresscon=async(req,res)=>{
    try {
        const {id}=req.params
        const {user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark}=req.body
        const result=await updateaddressByid(user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark,id)

    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}

export const Deleteaddresscon=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await deleteaddressByid(id)
        res.send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}