import { logger } from "../utils/logger.js";
import {reviews,reviewbyid,createreview,deletereview, updatereview} from "../services/index.js"

export const getAllreviews=async(req,res)=>{
    try {
        const result=await reviews()
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}

export const getreviewByid=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await reviewbyid(id)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}

export const Createreview=async(req,res)=>{
    try {
        const {user_id,product_id,rating,comment,created_at,updated_at}=req.body
        const result=await createreview({user_id,product_id,rating,comment,created_at,updated_at})
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}

export const Updatereviews=async(req,res)=>{
    try {
        const {id}=req.params
        const {user_id,product_id,rating,comment,created_at,updated_at}=req.body
        const result=await updatereview({user_id,product_id,rating,comment,created_at,updated_at,id})
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}

export const deletereviewByid=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await deletereview(id)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}