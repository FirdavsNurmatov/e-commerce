import knex from "../Database/index.js";

export const getusers = async () => {
    const users = await knex("users").select("*");
    if (users.length >= 1) {
        return users;
    } else {
        return "Userlar topilmadi";
    }
};

export const getuserbyemail = async (email) => {
    const user = await knex("users").where({ email }).first();
    if (user) {
        return user;
    } else {
        return "User topilmadi";
    }
};

export const deleteuserbyemail = async (email) => {
    const user = await knex("users").where({ email }).first();
    if (user) {
        await knex("users").where({ email }).del();
        return "User o'chirildi";
    } else {
        return "O'chiriladigan User topilmadi";
    }
};

export const updateuser = async ({ name, password, role, phone_number, is_active, birth_of_date, avatar, username, email }) => {
    const user = await knex("users").where({ email }).first();
    if (user) {
        await knex("users")
            .where({ email })
            .update({
                role,
                is_active,
                password,
                name,
                username,
                phone_number,
                avatar,
                birth_of_date,
            });
        return "User yangilandi";
    } else {
        return "Yangilanadigan User topilmadi";
    }
};
