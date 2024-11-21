import knex from "../Database/index.js";

export const getaddresses = async () => {
    const addresses = await knex("address").select("*");
    if (addresses.length >= 1) {
        return addresses;
    } else {
        return "Addreslar topilmadi";
    }
};

export const getaddressByid = async (id) => {
    const address = await knex("address").where({ id }).first();
    if (address) {
        return address;
    } else {
        return "Address topilmadi";
    }
};

export const createaddress = async (user_id, title, created_at, address_line_1, address_line_2, country, city, postal_code, phone_number, landmark) => {
    const addressData = {
        user_id,
        title,
        address_line_1,
        address_line_2,
        country,
        city,
        postal_code,
        phone_number,
        landmark,
    };

    if (created_at) {
        addressData.created_at = created_at;
    }

    await knex("address").insert(addressData);
    return "Address yaratildi";
};

export const updateaddressByid = async (user_id, title, created_at, address_line_1, address_line_2, country, city, postal_code, phone_number, landmark, id) => {
    const existingAddress = await knex("address").where({ id }).first();

    if (!existingAddress) {
        return "Yangilanadigan Address topilmadi";
    }

    const updateData = {
        user_id,
        title,
        address_line_1,
        address_line_2,
        country,
        city,
        postal_code,
        phone_number,
        landmark,
    };

    if (created_at) {
        updateData.created_at = created_at;
    }

    await knex("address").where({ id }).update(updateData);
    return "Addres yangilandi";
};

export const deleteaddressByid = async (id) => {
    const existingAddress = await knex("address").where({ id }).first();

    if (!existingAddress) {
        return "O'chiriladigan Address topilmadi";
    }

    await knex("address").where({ id }).del();
    return "Addres o'chirildi";
};
