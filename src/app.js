import express from "express"
import morgan from "morgan"

import { addressrouter, cart_item_router, cartrouter, categoryroutes, ordersrotuter, reviewRouter, socialrouter, userrouter, whishlistrouter } from "./routes/index.js"
import {createAlltables} from "./schema/index.js"
import { productrouter } from "./routes/product.routes.js"

const app=express()


app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


app.use("/auth",userrouter)
app.use("/users",userrouter)
app.use("/social",socialrouter)
app.use("/address",addressrouter)
app.use("/category",categoryroutes)
app.use("/product",productrouter)
app.use("/whishlist",whishlistrouter)
app.use("/review",reviewRouter)
app.use("/cart",cartrouter)
app.use("/order",ordersrotuter)
app.use("/cart_item",cart_item_router)

app.get("/",(req,res)=>{
    res.send('ok')
})



app.get("/setup",async(req,res)=>{
    await createAlltables()
    res.send("Table created")
})


export default app
