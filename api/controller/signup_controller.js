import User from '../models/users.js';
import bcrypt from 'bcryptjs';
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password|| username==='' || email==='' || password==='') {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const hashpassword= bcrypt.hashSync(password, 10);
    const newuser = new User({ username, email, password: hashpassword, });
    try{await newuser.save();
    res.json({ message: 'Signup successful' });}
    catch(err){
        return res.status(500).json({ message: err.message });
    }
};