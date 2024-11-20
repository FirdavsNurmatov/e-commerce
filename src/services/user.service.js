import pool from "../Database/index.js";

export const getusers=async()=>{
    const query="Select * from users ;"
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Userlar topilmadi"
    }
}

export const getuserbyemail=async(email)=>{
    const query="Select * from users where email=$1;"
    const result=await pool.query(query,[email])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "User topilmadi"
    }
}

export const deleteuserbyemail=async(email)=>{
    const query="Select * from users where email=$1;"
    const deletequery="Delete * from users where email=$1"
    const result=await pool.query(query,[email])
    if(result.rows.length>=1){
        await pool.query(deletequery,[email])
        return "User o'chirildi"
    }else{
        return "O'chiriladigan User topilmadi"
    }
}

export const updateuser=async({name,password,role,phone_number,is_active,birth_of_date,avatar,username,email})=>{
    const query="Select * from users where email=$1;"
    const updatequery="Update users set role=$1,is_active=$2,password=$3,name=$4,username=$5,phone_number=$6,avatar=$7,birth_of_date=$8 where email=$9"
    const result=await pool.query(query,[email])
    if(result.rows.length>=1){
        await pool.query(updatequery,[role,is_active,password,name,username,phone_number,avatar,birth_of_date,email])
        return "User yangilandi"
    }else{
        return "Yangilanadigan User topilmadi"
    }
}