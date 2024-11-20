import {pool} from "../Database/index.js"


export const getCategoryes=async()=>{
    const query="Select * from category"
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Categorylar topilmadi"
    }
}

export const getcategorybyid=async(id)=>{
    const query="Select * from category where id=$1"
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Category topilmadi"
    }
}



export const createCategory=async({name,description,tag,created_at,updated_at})=>{
    if(!created_at || !updated_at){
        var query='Insert into category(name,description,tag) Values($1,$2,$3)'
        var arr=[name,description,tag]
    }else{
        var query='Insert into category(name,description,tag,created_at,updated_at) Values($1,$2,$3,$4,$5)'
        var arr=[name,description,tag,created_at,updated_at]
    }
    await pool.query(query,arr)
    return "Category yaratildi"
}

export const updatecategory=async({name,description,tag,created_at,updated_at,id})=>{
    const query="Select * from category where id=$1"
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){ 
        if(!created_at || !updated_at){
            var updatequery='Update category set name=$1,description=$2,tag=$3 where id=$4'
            var arr=[name,description,tag,id]
        }else{
            var updatequery='Update category set name=$1,description=$2,tag=$3,created_at=$4,updated_at=$5 where id=$6'
            var arr=[name,description,tag,created_at,updated_at,id]
        }
        await pool.query(updatequery,arr)
        return "Category yangilandi"
    }else{
        return "Yangilanadigan Category topilmadi"
    }
}



export const deletecategory=async(id)=>{
    const query="Select * from category where id=$1"
    const result=await pool.query(query,[id])
    const deletequery="Delete from category where id=$1"
    if(result.rows.length>=1){
        await pool.query(deletequery,[id])
        return "Category o'chirildi"
    }else{
        return "O'chiriladigan Category topilmadi"
    }

}