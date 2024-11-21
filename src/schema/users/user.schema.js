import { logger } from "../../utils/logger.js"
import {pool} from "../../Database/index.js"
export const createUsertable=async()=>{
    try {
        // await pool.query(`
        //     CREATE TYPE USER_ROLE AS ENUM ('user','admin','manager')
        // `)
        await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
                id serial primary key,
                name varchar,
                email varchar unique not null,
                password varchar not null,
                role  USER_ROLE default 'user',
                avatar varchar,
                username varchar,
                birth_of_date Date ,
                phone_number varchar unique not null,
                is_active boolean default false,
                create_at timestamp default CURRENT_TIMESTAMP,
                update_at timestamp default CURRENT_TIMESTAMP
                )
                `)
        logger.info("User Table  yaratildi")
    } catch (error) {
        logger.error(error.message)
    }
}
