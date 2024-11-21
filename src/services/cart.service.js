import pool from "../Database/index.js"

export const getcarts=async()=>{
    const query='Select * from cart'
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Cartlar topilmadi"
    }
}

export const getcartbyid=async(id)=>{
    const query='Select * from cart where id=$1'
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Cart topilmadi"
    }
}

export const createcart=async({user_id,total,created_at,updated_at})=>{
    if(!created_at || !updated_at){
        var query='Insert into cart (user_id,total) Values($1,$2) returning *'
        var arr=[user_id,total]
    }else{
        var query='Insert into cart (user_id,total,created_at,updated_at) Values($1,$2,$3,$4) returning *'
        var arr=[user_id,total,created_at,updated_at]
    }
    const result=await pool.query(query,arr)
    return result.rows
}

export const updatecart=async({user_id,total,created_at,updated_at,id})=>{
    if (!created_at || !updated_at){
        const query='Update cart set user_id=$1,total=$2 where id=$3 returning *'
        const arr=[user_id,total,id]
        const result=await pool.query(query,arr)
        return result.rows
    }else{
        const query='Update cart set user_id=$1,total=$2,created_at=$3,updated_at=$4 where id=$5 returning *'
        const arr=[user_id,total,created_at,updated_at,id]
        const result=await pool.query(query,arr)
        return result.rows
    }
}

export const deleteCart=async(id)=>{
    const query='Select * from cart where id=$1'
    const result=await pool.query(query,[id])
    const deletequery='Delete from cart where id=$1'
    if(result.rows.length>=1){
        const result=await pool.query(deletequery,[id])
        return result.rows
    }else{
        return "O'chiriladigan Cart topilmadi"
    }
}