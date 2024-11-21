import {pool} from "../Database/index.js"

export const getorders=async()=>{
    const query='Select * from orders'
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Orderlar topilmadi"
    }
}

export const getorderbyid=async(id)=>{
    const query='Select * from orders where id=$1'
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Order topilmadi"
    }
}

export const createorder=async({user_id,cart_id,created_at,updated_at})=>{
    if(!created_at || !updated_at){
        var query='Insert into orders (user_id,cart_id) Values($1,$2) returning *'
        var arr=[user_id,cart_id]
    }else{
        var query='Insert into orders (user_id,cart_id,created_at,updated_at) Values($1,$2,$3,$4) returning *'
        var arr=[user_id,cart_id,created_at,updated_at]
    }
    const result=await pool.query(query,arr)
    return result.rows
}

export const updateorder=async({user_id,cart_id,created_at,updated_at,id})=>{
    if (!created_at || !updated_at){
        const query='Update orders set user_id=$1,cart_id=$2 where id=$3 returning *'
        const arr=[user_id,cart_id,id]
        const result=await pool.query(query,arr)
        return result.rows
    }else{
        const query='Update orders set user_id=$1,cart_id=$2,created_at=$3,updated_at=$4 where id=$5 returning *'
        const arr=[user_id,cart_id,created_at,updated_at,id]
        const result=await pool.query(query,arr)
        return result.rows
    }
}

export const deleteorder=async(id)=>{
    const query='Select * from orders where id=$1'
    const result=await pool.query(query,[id])
    const deletequery='Delete from orders where id=$1 returning *'
    if(result.rows.length>=1){
        const data=await pool.query(deletequery,[id])
        return data.rows
    }else{
        return "O'chiriladigan order topilmadi"
    }
}