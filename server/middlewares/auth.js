import jwt from 'jsonwebtoken';


const userAuth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header
    app.use(express.json());

    if (!token) {
        return res.json({ success: false, message: "Not authorized, Login again" });
    }

    try {
        // Verify token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if decoded token has a valid user ID
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id; // Attach decoded ID to request
           
        } else {
            return res.json({ success: false, message: "Not authorized, Login again" });
        }
        next();
    } catch (error) {
        res.json({ success: false, message: error.message})
    }
};

export default userAuth;
