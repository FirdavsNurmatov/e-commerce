import {pool} from "../../Database/index.js"
import {logger} from "../../utils/logger.js"

const categroySchema=`
    Create table if not exists category(
     id serial primary key,
     name varchar,
     description text,
     tag varchar,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
    )

`

export const createCategorytable=async()=>{
    try {
        await pool.query(categroySchema)
        logger.info("Category yaratildi")
    } catch (error) {
        logger.error(error)
        return error
    }
}