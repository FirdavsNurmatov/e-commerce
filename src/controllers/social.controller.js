import { logger } from "../utils/logger.js";
import {getsoAllsocial,getsocialbyId,deletesocial,createsocial,updatesocial} from "../services/index.js"

export const getSocialscon=async(req,res)=>{
    try {
        const result=await getsoAllsocial()
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}

export const getSocialbyid=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await getsocialbyId(id)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    } 
}

export const createSocial=async(req,res)=>{
    try {
        const {user_id,platform,platform_user}=req.body
        const result=await createsocial(user_id,platform,platform_user) 
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error.message)
    }
}
export const UpdateSocial=async(req,res)=>{
    try {
        const {id}=req.params
        const {user_id,platform,platform_user}=req.body
        const result=await updatesocial(id,user_id,platform,platform_user)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}
export const deleteSocial=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await deletesocial(id)
        res.status(200).send(result)
    } catch (error) {
        logger.error(error)
        res.status(400).send(error)
    }
}