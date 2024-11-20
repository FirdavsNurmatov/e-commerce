import {pool} from "../../Database/index.js"
import {logger} from "../../utils/logger.js"


const orderschema=`
    Create table if not exists orders(
        id serial primary key,
        user_id INT REFERENCES users(id),
        cart_id INT REFERENCES cart(id),
        created_at timestamp default current_timestamp,
        updated_at timestamp default current_timestamp
    )
`

export const createOrderstable=async()=>{
    try {
        await pool.query(orderschema)
        logger.info("Table yaratildi")
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
