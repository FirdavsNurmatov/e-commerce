import { logger } from "../../utils/logger.js"
import { pool } from "../../Database/index.js"
export const createAddresstable = async () => {
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS address(
                id serial primary key,
                user_id int,foreign key(user_id) references users(id),
                title varchar  not null,
                created_at timestamp default current_timestamp,
                address_line_1  varchar not null,
                address_line_2  varchar not null,
                country varchar,
                city varchar,
                postal_code varchar,
                phone_number varchar,
                landmark varchar not null
                )
                `)
        logger.info("Address Table  yaratildi")
    } catch (error) {
        logger.error(error.message)
    }
}

// await createAddresstable()
