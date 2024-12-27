import jwt from 'jsonwebtoken';

<<<<<<< HEAD

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
=======
const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    
    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized, Login again" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET); // Fix typo here

        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;  // Attach the decoded user ID to the request
        } else {
            return res.status(401).json({ success: false, message: "Not authorized, Login again" });
        }

        next();
    } catch (error) {
        console.error(error);  // Log the error for debugging purposes
        res.status(401).json({ success: false, message: "Invalid token, not authorized" }); // Update message and status code
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
    }
};

export default userAuth;
