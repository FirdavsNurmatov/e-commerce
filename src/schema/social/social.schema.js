import { logger } from "../../utils/logger.js"
import {pool} from "../../Database/index.js"
export const socialprofiletable=async()=>{
    try {
    
        await pool.query(`
        CREATE TABLE IF NOT EXISTS social_profile(
                id serial primary key,
                user_id int ,foreign key(user_id) references users(id),
                platform varchar,
                platform_user varchar
                )
                `)
        logger.info("Social profile Table  yaratildi")
    } catch (error) {
        logger.error(error.message)
    }
}
