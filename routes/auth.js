const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../models/User');

//@route  GET api/auth 
//@desc Login a user
//@acess Private
router.get('/',(req,res)=> {
    res.send('Get logged in user')
});

//@route  POST api/auth 
//@desc Auth user & get token
//@acess Public
router.post('/',[ check('email','Please enter valid email').isEmail(),
check('password','Please enter password with atleast 6 characters').isLength({min: 6}),
],async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email,password} = req.body;

    try{
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({msg: 'Invalid Credentials'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({msg: "Invalid Credentials"})
        }

        const payload = {
            user: {
                id: user.id
            }
        }
 
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000,
        },(err,token) => {
            if(err) throw err;
            res.json({token});
        })
    } catch(err){
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

module.exports = router;