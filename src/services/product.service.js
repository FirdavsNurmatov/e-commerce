import {pool} from "../Database/index.js"


export const getallproducts=async()=>{
    const query="Select * from product"
    const result=await pool.query(query)
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Productlar topilmadi"
    }
}

export const getproductbyid=async(id)=>{
    const query="Select * from product where id=$1"
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        return result.rows
    }else{
        return "Product topilmadi"
    }
}

export const createproduct=async({category_id,title,picture,summary,description,price,discount_type,discount_value,tags})=>{
    const query="Insert into product(category_id,title,picture,summary,description,price,discount_type,discount_value,tags) Values($1,$2,$3,$4,$5,$6,$7,$8,$9)"
    const arr=[category_id,title,picture,summary,description,price,discount_type,discount_value,tags]
    await pool.query(query,arr)
    return "Product yaratildi"
}

export const updateproduct=async({category_id,title,picture,summary,description,price,discount_type,discount_value,tags,id})=>{
    const query="Select * from product where id=$1"
    const updatequery="Update product set category_id=$1,title=$2,picture=$3,summary=$4,description=$5,price=$6,discount_type=$7,discount_value=$8,tags=$9 where id=$10"
    const arr=[category_id,title,picture,summary,description,price,discount_type,discount_value,tags,id]
    const result=await pool.query(query,[id])
    if(result.rows.length>=1){
        await pool.query(updatequery,arr)
        return "Product yangilandi"
    }else{
        return "Yangilanadigan Product topilmadi"
    }
}

export const deleteproduct=async(id)=>{
    const query="Select * from product where id=$1"
    const result=await pool.query(query,[id])
    const deletequery="Delete from product where id=$1"
    if(result.rows.length>=1){
        await pool.query(deletequery,[id])
        return "Product o'chirildi"
    }else{
        return "O'chiriladigan Product topilmadi"
    }

}


