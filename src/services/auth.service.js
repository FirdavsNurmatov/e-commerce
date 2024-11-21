import knex from "../Database/index.js";

export const register = async (email, name, password, role, phone_number, is_active, birth_of_date, avatar, username) => {
    // Check if the user already exists
    const existingUser = await knex("users")
        .where({ email, password })
        .first();

    if (existingUser) {
        return "Ushbu foydalanuvchi ro'yxatdan o'tgan";
    }

    // Prepare user data
    const userData = {
        email,
        name,
        password,
        phone_number,
        is_active,
        birth_of_date,
        avatar,
        username,
    };

    if (role) {
        userData.role = role;
    }

    // Insert new user into the database
    await knex("users").insert(userData);

    return "Ro'yxatdan o'tdingiz";
};

export const login = async (email, password) => {
    // Check if the user exists
    const user = await knex("users")
        .where({ email, password })
        .first();

    if (user) {
        return user;
    }

    return "User topilmadi";
};
