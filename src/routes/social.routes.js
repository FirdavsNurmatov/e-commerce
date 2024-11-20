import express from "express"
import {getSocialscon,getSocialbyid,createSocial,UpdateSocial,deleteSocial} from "../controllers/index.js"
import {checksocialsprofiledata,updatesocialsprofiledata} from "../middlewares/index.js"
import {checksocialvalidator} from "../validation/index.js"


export const socialrouter=express.Router()

socialrouter.get("/",getSocialscon)
socialrouter.get("/:id",getSocialbyid)
socialrouter.post("/",checksocialsprofiledata(checksocialvalidator),createSocial)
socialrouter.put("/:id",updatesocialsprofiledata(checksocialvalidator),UpdateSocial)
socialrouter.delete("/:id",deleteSocial)