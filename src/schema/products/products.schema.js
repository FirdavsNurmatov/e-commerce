import { logger } from '../../utils/logger.js'
// import pool from '../../Database/postgres.js'
import db from '../../Database/knex.js'

// const productSchema = `
//     create table if not exists product(
//         id serial primary key,
//         category_id int, foreign key(category_id) references category(id),
//         title varchar,
//         picture varchar,
//         summary varchar,
//         description varchar,
//         price real,
//         discount_type varchar,
//         discount_value varchar,
//         tags varchar
//     )

// `

if (!(await db.schema.hasTable('products'))) {
    await db.schema.createTable('products', (table) => {
        table.increments('id').primary()
        table
            .integer('category_id')
            .unsigned()
            .references('id')
            .inTable('categories')
            .onDelete('CASCADE')
        table.string('title').notNullable()
        table.string('picture')
        table.string('summary')
        table.text('description')
        table.decimal('price', 10, 2).notNullable()
        table.enu('discount_type', ['percentage', 'fixed'])
        table.decimal('discount_value', 10, 2)
        table.specificType('tags', 'text[]')
        table.timestamps(true, true)
    })
    logger.info('Products table created.')
}

// export const createProductable = async () => {
//     try {
//         await pool.query(productSchema)
//         logger.info('Product table yaratildi')
//     } catch (error) {
//         logger.error(error)
//         return error
//     }
// }
