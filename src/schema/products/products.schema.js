import { pool } from "../../Database/index.js"
import { logger } from "../../utils/logger.js"


const productSchema = `
    Create table if not exists product(
     id serial primary key,
     category_id int, foreign key(category_id) references category(id),
     title varchar,
     picture varchar,
     summary varchar,
     description varchar,
     price real,
     discount_type varchar,
     discount_value varchar,
     tags varchar
     )

`

export const createProductable = async () => {
    try {
        await pool.query(productSchema)
        logger.info("Product table yaratildi")
    } catch (error) {
        logger.error(error)
        return error
    }
}