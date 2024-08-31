// src/controllers/userController.js

import { createUser } from '../services/userService.js';

// Controller function for user registration
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await createUser({ username, email, password });
    res.status(201).json(user);  // Return the newly created user
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  registerUser,
};
