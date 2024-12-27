import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;
        
        // Check if both userId and prompt are provided
        if (!userId || !prompt) {
            return res.status(400).json({ success: false, message: 'Missing Details' });
        }

        // Fetch user from the database
        const user = await userModel.findById(userId);

        // Check if user exists and if they have credits
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        // Check if the user has enough credit balance
        if (user.creditBalance <= 0) {
            return res.status(400).json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance });
        }

<<<<<<< HEAD
=======
        // Update the user's credit balance before making the API call
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
        // Prepare form data for API request
        const formData = new FormData();
        formData.append('prompt', prompt);

        // Make API call to generate the image
        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                ...formData.getHeaders(),
            },
            responseType: 'arraybuffer',
        });

        // Convert the image data to base64
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

<<<<<<< HEAD
        // Update the user's credit balance after successful image generation
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

=======
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
        // Respond with the generated image and updated credit balance
        res.json({ success: true, message: 'Image Generated', creditBalance: user.creditBalance - 1, resultImage });

    } catch (error) {
        console.error(error);
<<<<<<< HEAD

        // Return a more specific error message based on the type of error
        if (error.response) {
            // API returned a non-2xx status code
            return res.status(error.response.status).json({ success: false, message: error.response.data.message || 'Error generating image', error: error.message });
        }

        if (error.request) {
            // No response from the API server
            return res.status(500).json({ success: false, message: 'No response from API server', error: error.message });
        }

        // Unknown error
=======
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
        res.status(500).json({ success: false, message: 'An error occurred while generating the image', error: error.message });
    }
};
