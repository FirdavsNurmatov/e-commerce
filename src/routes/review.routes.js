import express from 'express'
import {getAllreviews,getreviewByid,Createreview,Updatereviews,deletereviewByid} from "../controllers/index.js"

export const reviewRouter=express.Router()

reviewRouter.get("/",getAllreviews)
reviewRouter.get("/:id",getreviewByid)
reviewRouter.post("/",Createreview)
reviewRouter.put("/:id",Updatereviews)
reviewRouter.delete("/:id",deletereviewByid)