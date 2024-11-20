import { logger } from "../utils/logger.js";
import {createCategory,getCategoryes,getcategorybyid,deletecategory, updatecategory} from "../services/index.js"

export const getAllcategory=async(req,res)=>{
    try {
        const result=await getCategoryes()
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}

export const getcategoryByid=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await getcategorybyid(id)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}
export const Createcategory=async(req,res)=>{
    try {
        const {name,tag,description,created_at,updated_at}=req.body
        const result=await createCategory({name,tag,description,created_at,updated_at})
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}
export const Updatecategory=async(req,res)=>{
    try {
        const {id}=req.params
        const {name,tag,description,created_at,updated_at}=req.body
        const result=await updatecategory({name,tag,description,created_at,updated_at,id})
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}
export const Deletecategory=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await deletecategory(id)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}
