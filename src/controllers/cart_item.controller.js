import { logger } from "../utils/logger.js"
import {getcart_items,getcart_itembyid,deletecart_item,createcart_item, updatecart_item} from "../services/index.js"

export const getAllcart_tems=async(req,res)=>{
    try {
        const result=await getcart_items()
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}

export const getAllcart_temByid=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await getcart_itembyid(id)
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}


export const Createcart_item=async(req,res)=>{
    try {
        const {cart_id,product_id,quantity,created_at,updated_at}=req.body
        const result=await createcart_item({cart_id,product_id,quantity,created_at,updated_at})
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}

export const Updatecart_item=async(req,res)=>{
    try {
        const {id}=req.params
        const {cart_id,product_id,quantity,created_at,updated_at}=req.body
        const result=await updatecart_item({cart_id,product_id,quantity,created_at,updated_at,id})
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}

export const Deletecart_item=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await deletecart_item(id)
        res.status(200).send(result)        
    } catch (error) {
        logger.error(error.message)
        res.status(400).send(error.message)
    }
}