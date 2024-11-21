import { logger } from "../utils/logger.js";
import {getcarts,getcartbyid,createcart,updatecart,deleteCart} from "../services/index.js"

export const getAllcarts=async(req,res)=>{
    try {
        const result=await getcarts()
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}

export const getcartByid=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await getcartbyid(id)
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}


export const Createcart=async(req,res)=>{
    try {
        const {user_id,total,created_at,updated_at}=req.body
        const result=await createcart({user_id,total,created_at,updated_at})
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}


export const Updatecart=async(req,res)=>{
    try {
        const {id}=req.params
        const {user_id,total,created_at,updated_at}=req.body
        const result=await updatecart({user_id,total,created_at,updated_at,id})
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}

export const Deletecart=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await deleteCart(id)
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}