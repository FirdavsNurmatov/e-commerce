import postgres from './db.js'
import application from './app.js'

export const config = {
    ...postgres,
    ...application,
}
// console.log(config)