import { logger } from "../utils/logger.js";
import {getallproducts,getproductbyid,createproduct,deleteproduct, updateproduct} from "../services/index.js"
export const getAllproducts=async(req,res)=>{
    try {
        const result=await getallproducts()
        res.status(200).send(result)
    } catch (error) {
      logger.error(error)
      res.status(400).send(error)  
    }
}

export const getproductByid=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await getproductbyid(id)
        res.status(200).send(result)
    } catch (error) {
      logger.error(error)
      res.status(400).send(error)  
    }
}

export const Createproduct=async(req,res)=>{
    try {
        const {category_id,title,picture,summary,description,price,discount_type,discount_value,tags}=req.body
        const result=await createproduct({category_id,title,picture,summary,description,price,discount_type,discount_value,tags})
        res.status(200).send(result)
    } catch (error) {
      logger.error(error)
      res.status(400).send(error)  
    }
}

export const Updateproduct=async(req,res)=>{
    try {
        const {id}=req.params
        const {category_id,title,picture,summary,description,price,discount_type,discount_value,tags}=req.body
        const result=await updateproduct({category_id,title,picture,summary,description,price,discount_type,discount_value,tags,id})
        res.status(200).send(result)
    } catch (error) {
      logger.error(error)
      res.status(400).send(error)  
    }
}

export const Deleteproduct=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await deleteproduct(id)
        res.status(200).send(result)
    } catch (error) {
      logger.error(error)
      res.status(400).send(error.message)  
    }
}