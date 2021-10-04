const express = require('express');
const router = express.Router();

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


        res.send('pass')
    }



})



module.exports = router;