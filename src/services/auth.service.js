import pool from "../Database/index.js"

export const register=async(email,name,password,role,phone_number,is_active,birth_of_date,avatar,username)=>{
    const query="Select * from users where email=$1 and password=$2"
    const result=await pool.query(query,[email,password])
    if(role){
        var createquery="Insert into users (email,name,password,role,phone_number,is_active,birth_of_date,avatar,username) Values($1,$2,$3,$4,$5,$6,$7,$8,$9)"
        var arr=[email,name,password,role,phone_number,is_active,birth_of_date,avatar,username]
    }else{
        var createquery="Insert into users (email,name,password,phone_number,is_active,birth_of_date,avatar,username) Values($1,$2,$3,$4,$5,$6,$7,$8)"
        var arr=[email,name,password,phone_number,is_active,birth_of_date,avatar,username]
    }
    if(result.rows.length>=1){
        return "Ushbu foydalanuvchi ro'yxatdan o'tgan"
    }else{
        await pool.query(createquery,arr)
        return "Ro'yxatdan o'tdingiz" 
    }
}

export const login=async(email,password)=>{
    const query="Select * from users where email=$1 and password=$2"
    const result=await pool.query(query,[email,password])
    if(result.rows.length>=1){
        return result.rows
    }
    return "User topilmadi"
}