import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user data
    const userData = {
      name,
      email,
      password: hashedPassword
    }

    // Save user to database
    const newUser = new userModel(userData);
    const user = await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.json({ success: true, token, user: { name: user.name } })
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token, user: { name: user.name } });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: error.message });
  }
};

const userCredits = async (req, res) => {
    try {
        const { userId } = req.body;

        // Check if userId is provided in the request body
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        // Find the user by ID
        const user = await userModel.findById(userId);

        // If user is not found, return a 404
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Return the user details and credits
        res.status(200).json({
            success: true,
            credits: user.creditBalance,
            user: { name: user.name }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching user credits", error: error.message });
    }
};


export { registerUser, loginUser, userCredits };
