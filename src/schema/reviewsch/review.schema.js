import { pool } from "../../Database/index.js"
import { logger } from "../../utils/logger.js"

const reviewSchema = `
    Create table if not exists reviews(
        id serial primary key,
        user_id INT REFERENCES users(id),
        product_id INT REFERENCES product(id),
        rating varchar,
        comment varchar,
        created_at timestamp default CURRENT_TIMESTAMP,
        updated_at timestamp default CURRENT_TIMESTAMP
        )
`

export const createReviewTable=async()=>{
    try {
        await pool.query(reviewSchema)
        logger.info("Table yaratildi")
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}

