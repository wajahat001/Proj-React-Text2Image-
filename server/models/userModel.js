import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      creditBalance: { type: Number, default: 5 },
<<<<<<< HEAD
    });
=======
    },
    { versionKey: false } // Disables the __v field
  );
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
  

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
