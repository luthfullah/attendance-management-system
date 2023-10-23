const mongoose= require('mongoose')
const express= require('express');
const router = express.Router();
const user = require('../models/Users')
const bcrypt = require('bcrypt')
const bodyparser=require('body-parser')
const jwt= require('jsonwebtoken')

router.use(bodyparser.json());
router.get('/', async (req, res) => {
  try {
      const getUsers = await user.find();

      if (getUsers.length === 0) {
          return res.status(404).json({ message: 'No users found' });
      } else {
          return res.status(200).json({getUsers });
      }
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/', async(req, res)=>{
 let getUsers;
 try {
    getUsers= await user.find();
 } catch (error) {
    console.log(error);
 }
 if (!getUsers) {
    return res.status(404).json({message: 'user not found...'})
 } else {
    return res.status(201).json({getUsers})

 }

})


//registeration api
router.post('/', async(req, res)=>{
    let postUsers;
    try {
        const {name, email, password, phone,role}=req.body;
        const passwordhash=await bcrypt.hash(password,10);

        postUsers = new user({
            name,email, password: passwordhash, phone, role 
        });
       await postUsers.save();
    } catch (error) {
        console.log(error);
    }
    if (!postUsers) {
        return res.status(500).json({message: 'users not added...'})
    } else {
        return res.status(201).json({postUsers})

    }
})

//login api
router.post('/login',async (req,res)=>{
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const User = await user.findOne({ email });
  
      if (!User) {
        return res.status(401).json({ message: 'Invalid Email' });
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, User.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid Password' });
      }
  
      const secretKey='The best of both worlds';
      // Create a token with the user's ID and a secret key
      const token = jwt.sign({ userId: User._id,username:User.name, role: User.role}, secretKey, { expiresIn: '1h' });
  
      // Respond with the token
      res.json({'username':User.name, 'usertype':User.role,'token':token });
      if (!token) {
        console.log("token testing ,invalid");
      }
    } catch (error) {
      console.error('Login failed:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  })

  


module.exports= router;