import pg from 'pg'
import { config } from '../config/index.js'

const { Pool } = pg

export const pool = new Pool({
    user: config.postgres.user,
    password: config.postgres.password,
    host: config.postgres.host,
    port: config.postgres.port,
    database: config.postgres.database,
})

export default pool
