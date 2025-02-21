import User from '../models/users.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/errors.js';
export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password|| username==='' || email==='' || password==='') {
       next(errorHandler(400, 'All fields are required'));
    }
    const hashpassword= bcrypt.hashSync(password, 10);
    const newuser = new User({ username, email, password: hashpassword, });
    try{await newuser.save();
    res.json({ message: 'Signup successful' });}
    catch(err){
        next(err);
    }
};