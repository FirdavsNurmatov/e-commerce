import {pool} from "../../Database/index.js"
import {logger} from "../../utils/logger.js"


const cartSchema=`
    Create table if not exists cart(
        id serial primary key,
        user_id INT REFERENCES users(id),
        total int,
        created_at timestamp default current_timestamp,
        updated_at timestamp default current_timestamp
    )
`

export const createCarttable=async()=>{
    try {
        await pool.query(cartSchema)
        logger.info("Table yaratildi")
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}

