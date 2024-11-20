import { logger } from "../utils/logger.js";
import {getorders,getorderbyid,createorder,updateorder,deleteorder} from "../services/index.js"

export const getOrders=async(req,res)=>{
    try {
        const result=await getorders()
        res.status(200).send(result)          
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}


export const getOrderByid=async(req,res)=>{
    try {   
        const {id}=req.params
        const result=await getorderbyid(id)
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}



export const CreateOrder=async(req,res)=>{
    try {
        const {user_id,cart_id,created_at,updated_at}=req.body
        const result=await createorder({user_id,cart_id,created_at,updated_at})
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}


export const Updateorder=async(req,res)=>{
    try {
        const {id}=req.params
        const {user_id,cart_id,created_at,updated_at}=req.body
        const result=await updateorder({user_id,cart_id,created_at,updated_at,id})
        res.status(200).send(result)          
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}

export const Deleteorder=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await deleteorder(id)       
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}