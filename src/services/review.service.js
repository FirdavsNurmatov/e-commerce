import {pool} from "../Database/index.js";

export const reviews=async()=>{
    const query='Select * from reviews'
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Reviewlar topilmadi"
    }
}

export const reviewbyid=async(id)=>{
    const query='Select * from reviews where id=$1'
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Review topilmadi"
    }
}

export const createreview=async({user_id,product_id,rating,comment,created_at,updated_at})=>{
    if(!created_at || !updated_at){
        var query='Insert into reviews (user_id,product_id,rating,comment,created_at,updated_at) Values($1,$2,$3,$4,$5,$6) returning *'
        var arr=[user_id,product_id,rating,comment,created_at,updated_at]
    }else{
        var query='Insert into reviews (user_id,product_id,rating,comment) Values($1,$2,$3,$4) returning *'
        var arr=[user_id,product_id,rating,comment]
    }
    const result=await pool.query(query,arr)
    return result.rows
}

export const updatereview=async({user_id,product_id,rating,comment,created_at,updated_at,id})=>{
    if (!created_at || !updated_at){
        const query='Update reviews set user_id=$1,product_id=$2,rating=$3,comment=$4 where id=$5 returning *'
        const arr=[user_id,product_id,rating,comment,id]
        const result=await pool.query(query,arr)
        return result.rows
    }else{
        const query='Update reviews set user_id=$1,product_id=$2,rating=$3,comment=$4,created_at=$5,updated_at=$6 where id=$7 returning *'
        const arr=[user_id,product_id,rating,comment,created_at,updated_at,id]
        const result=await pool.query(query,arr)
        return result.rows
    }
}

export const deletereview=async(id)=>{
    const query='Select * from reviews where id=$1'
    const result=await pool.query(query,[id])
    const deletequery='Delete from reviews where id=$1 returning *'
    if(result.rows.length>=1){
       const data= await pool.query(deletequery,[id])
        return data.rows
    }else{
        return "O'chiriladigan review topilmadi"
    }
    
}