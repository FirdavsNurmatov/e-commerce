import pool from "../Database/index.js";
export const getsoAllsocial=async()=>{
    const query="Select * from social_profile"
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Socials profilelar topilmadi"
    }
}

export const getsocialbyId=async(id)=>{
    const query="Select * from social_profile where id=$1"
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Social profile topilmadi"
    }
}

export const createsocial=async(user_id,platform,platform_user)=>{
    const query="Insert into social_profile(user_id,platform,platform_user) values($1,$2,$3)"
    await pool.query(query,[user_id,platform,platform_user])
    return "Socila profile yaratildi"
}
export const updatesocial=async(id,user_id,plarform,platform_user)=>{
    const query="Select * from social_profile where id=$1"
    const result=await pool.query(query,[id])
    const updatequery="Update social_profile set user_id=$1,platform=$2,platform_user=$3 where id=$4"
    if(result.rows.length>=1){
        await pool.query(updatequery,[user_id,plarform,platform_user,id])
        return "Social profile yangilandi"
    }else{
        return "Yangilanadigan Social profile topilmadi"
    }
}

export const deletesocial=async(id)=>{
    const query="Select * from social_profile where id=$1"
    const result=await pool.query(query,[id])
    const deletequery="Delete  from social_profile where id=$1"
    if(result.rows.length>=1){
        await pool.query(deletequery,[id])
        return "Social o'chirildi"
    }else{
        return "O'chiriladigan Social profile topilmadi"
    }
}