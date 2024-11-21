import express from "express"
import { getOrders, getOrderByid, CreateOrder, Updateorder, Deleteorder } from "../controllers/index.js"
import { Checkordersdatamiddleware, Updateordersdatamiddleware } from "../middlewares/index.js"
import { ordersSchema } from "../validation/index.js"

export const ordersrotuter = express.Router()

ordersrotuter.get("/", getOrders)
ordersrotuter.get("/:id", getOrderByid)
ordersrotuter.post("/", Checkordersdatamiddleware(ordersSchema), CreateOrder)
ordersrotuter.put("/:id", Updateordersdatamiddleware(ordersSchema), Updateorder)
ordersrotuter.delete("/:id", Deleteorder)