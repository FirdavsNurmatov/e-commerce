import {logger} from "../utils/logger.js"
import {socialprofiletable} from "./social/social.schema.js"
import {createUsertable} from "./users/user.schema.js"
import { createAddresstable } from "./address/address.schema.js"
import { createProductable } from "./products/products.schema.js"
import { createCategorytable } from "./catgory/category.schema.js"
import {createWhishlistTable} from "./whishlist/whishlist.schema.js"
import {createReviewTable} from "./reviewsch/review.schema.js"
import {createCarttable} from "./cart/cart.schema.js"
import {createOrderstable} from "./orders/order.schema.js"
import {createCartItemtable} from "./cart/cart_item_schema.js"

export const createAlltables=async()=>{
    try {
        await createUsertable()
        await socialprofiletable()
        await createAddresstable()
        await createCategorytable()
        await createProductable()
        await createWhishlistTable()
        await createReviewTable()
        await createCarttable()
        await createOrderstable()
        await createCartItemtable()
    } catch (error) {
        logger.error(error)
    }
}