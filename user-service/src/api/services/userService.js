const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (userData) => {
    const { username, email, password } = userData;

    // check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    return user;
};

module.exports = {
    registerUser,
};

