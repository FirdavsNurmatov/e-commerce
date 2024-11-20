import express from "express"
import {checkproductdatamiddleware,updateproductdatamiddleware} from "../middlewares/index.js"
import {productdatavalidator} from "../validation/index.js"
import {getAllproducts,getproductByid,Createproduct,Updateproduct,Deleteproduct} from "../controllers/index.js"

export const productrouter=express.Router()

productrouter.get("/",getAllproducts)
productrouter.get("/:id",getproductByid)
productrouter.post("/",checkproductdatamiddleware(productdatavalidator),Createproduct)
productrouter.put("/:id",updateproductdatamiddleware(productdatavalidator),Updateproduct)
productrouter.delete("/:id",Deleteproduct)