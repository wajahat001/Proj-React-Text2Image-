import jwt from 'jsonwebtoken';

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
    }
};

export default userAuth;
