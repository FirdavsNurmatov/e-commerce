import pool from "../Database/index.js";

export const getaddresses=async()=>{
    const query="Select * from address"
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Addreslar topilmadi"
    }
}

export const getaddresByid=async(id)=>{
    const query="Select * from address where id=$1"
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Address topilmadi"
    }
}

export const createaddress=async(user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark)=>{
    if(created_at){
        var query="Insert into address(user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark) Values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"
        var arr=[user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark]
    } else{
        var query="Insert into address(user_id,title,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark) Values($1,$2,$3,$4,$5,$6,$7,$8,$9)"
        var arr=[user_id,title,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark] 
    }
    await pool.query(query,arr)
    return "Address yaratildi"
}

export const updateaddressByid=async(user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark,id)=>{
    const query="Select * from address where id=$1"
    const result=await pool.query(query,[id])
    if(created_at){
        var updatequery="Update address set user_id=$1,title=$2,created_at=$3,address_line_1=$4,address_line_2=$5,country=$6,city=$7,postal_code=$8,phone_number=$9,landmark=$10 where id=$11"
        var arr=[user_id,title,created_at,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark,id]
    }else{
        var updatequery="Update address set user_id=$1,title=$2,address_line_1=$3,address_line_2=$4,country=$5,city=$6,postal_code=$7,phone_number=$8,landmark=$9 where id=$10"
        var arr=[user_id,title,address_line_1,address_line_2,country,city,postal_code,phone_number,landmark,id]
    }
    if(result.rows.length>=1){
        await pool.query(updatequery,arr)
        return "Addres yangilandi"
    }else{
        return "Yangilanadigan Address topilmadi"
    }
}

export const deleteaddressByid=async(id)=>{
    const query="Select * from address where id=$1"
    const result=await pool.query(query,[id])
    const deletequery="Delete from address where id=$1"
    if(result.rows.length>=1){
        await pool.query(deletequery,[id])
        return "Addres o'chirildi"
    }else{
        return "O'chiriladigan Address topilmadi"
    }
}