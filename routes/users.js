const express = require('express');
const router = express.Router();


const bcrypt = require('bcryptjs');

// User model

const User = require('../models/User')


//login page
router.get('/login', (req, res) => res.render('login'));

//register page
router.get('/register', (req, res) => res.render('register'));
 

//register handle
router.post('/register', (req, res) => {
  
   const { name,email,password,password2 } = req.body;

   let errors =[];
   //check required fields
   if(!name || !email || !password || !password2) {

      errors.push({ msg: 'Please fill in the all fields'});

   }

   //checkpassword match
   if(password !== password2){

    errors.push({ msg: 'Password do not match'});

   }


   // check password should 6 character long

    if(password.lenght <6 ){

       errors.push({msg: 'Password should be at least 6 characters long'});

    }

    if(errors.length > 0){
            
        res.render('register',{

           errors, 
           name,
           email,
           password,
           password2 
        })

    } else{

        // validation password

       // res.send('pass')

       User.findOne({ email: email })
       .then(user => {

        if(user){
           //user exist

           errors.push({ msg: 'Email is Already registered' });
            res.render('register', {

                errors,
                name,
                email,
                password,
                password2
            })



        } else {
        
            const newUser = new User({
                name,
                email,
                password
               

            })

        }
       })
       ;
    }



})



module.exports = router;