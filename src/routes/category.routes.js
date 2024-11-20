import express from "express"
import {getAllcategory,getcategoryByid,Createcategory,Updatecategory,Deletecategory} from "../controllers/index.js"
import {checkcategorydatamiddleware,updatecategorydatamiddleware} from "../middlewares/index.js"
import {authGuard,roleGuard} from "../Guards/index.js"
import {categoryvalidator} from "../validation/index.js"
export const categoryroutes=express.Router()

categoryroutes.get("/",getAllcategory)
categoryroutes.get("/:id",getcategoryByid)
categoryroutes.post("/",authGuard,roleGuard(["admin","superadmin"]),checkcategorydatamiddleware(categoryvalidator),Createcategory)
categoryroutes.put("/:id",authGuard,roleGuard(["admin","superadmin"]),updatecategorydatamiddleware(categoryvalidator),Updatecategory)
categoryroutes.delete("/:id",authGuard,roleGuard(["admin","superadmin"]),Deletecategory)