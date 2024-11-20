import pool from "../Database/index.js"

export const getcart_items=async()=>{
    const query='Select * from cart_item'
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Cart_itemlar topilmadi"
    }
}

export const getcart_itembyid=async(id)=>{
    const query='Select * from cart_item where id=$1'
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Cart_item topilmadi"
    }
}

export const createcart_item=async({cart_id,product_id,quantity,created_at,updated_at})=>{
    if(!created_at || !updated_at){
        var query='Insert into cart_item (cart_id,product_id,quantity) Values($1,$2,$3) returning *'
        var arr=[cart_id,product_id,quantity]
    }else{
        var query='Insert into cart (cart_id,total,created_at,updated_at) Values($1,$2,$3,$4) returning *'
        var arr=[cart_id,product_id,quantity,created_at,updated_at]
    }
    const result=await pool.query(query,arr)
    return result.rows
}

export const updatecart_item=async({cart_id,product_id,quantity,created_at,updated_at,id})=>{
    if (!created_at || !updated_at){
        const query='Update cart_item set cart_id=$1,product_id=$2,quantity=$3 where id=$4 returning *'
        const arr=[cart_id,product_id,quantity,id]
        const result=await pool.query(query,arr)
        return result.rows
    }else{
        const query='Update cart_item set cart_id=$1,product_id=$2,quantity=$3,created_at=$4,updated_at=$5 where id=$6 returning *'
        const arr=[cart_id,product_id,quantity,created_at,updated_at,id]
        const result=await pool.query(query,arr)
        return result.rows
    }
}

export const deletecart_item=async(id)=>{
    const query='Select * from cart_item where id=$1'
    const result=await pool.query(query,[id])
    const deletequery='Delete from cart_item where id=$1'
    if(result.rows.length>=1){
        const data=await pool.query(deletequery,[id])
        return data.rows
    }else{
        return "O'chiriladigan Cart_item topilmadi"
    }
}

