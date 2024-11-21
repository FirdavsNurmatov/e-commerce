import express from "express"
import {getAllcarts,getcartByid,Createcart,Updatecart,Deletecart} from "../controllers/index.js"
import {Checkcartmiddleware,updatecartmiddleware} from "../middlewares/index.js"
import {cartSchema} from "../validation/index.js"

export const cartrouter=express.Router()

cartrouter.get("/",getAllcarts)
cartrouter.get("/:id",getcartByid)
cartrouter.post("/",Checkcartmiddleware(cartSchema),Createcart)
cartrouter.put("/:id",updatecartmiddleware(cartSchema),Updatecart)
cartrouter.delete("/:id",Deletecart)