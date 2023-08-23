import mongoose from "mongoose";
import bcryptjs from "bcryptjs"

const userSchema = new mongoose.Schema({
    username:{
       type: String,
       required: true,
       trim: true
    
    },
    password: {
        type: String,
       required: true,
       trim: true
    }
});
userSchema.pre("save", async function(next){
const user = this;

if(!user.isModified("password")) return next();
try {
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
    next();
} catch (error) {
    console.log(error);
    throw new Error("fallo el hash de la contraseña");
}
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcryptjs.compare(candidatePassword, this.password);
};

export const  User = mongoose.model('user', userSchema);