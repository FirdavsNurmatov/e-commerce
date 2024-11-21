import {pool} from "../../Database/index.js"
import {logger} from "../../utils/logger.js"

const cart_item_schema=`
Create table if not exists cart_item(
    id serial primary key,
    cart_id INT REFERENCES cart(id),
    product_id INT REFERENCES product(id),
    quantity varchar,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
)
`

export const createCartItemtable=async()=>{
try {
    await pool.query(cart_item_schema)
    logger.info("Table yaratildi")
} catch (error) {
    logger.error(error.message)
    return error.message
}
}

