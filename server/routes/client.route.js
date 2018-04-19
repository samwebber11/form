const express = require('express');
const router =  express.Router();

router.get('/', function(req, res){
   res.render('client', { success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});
router.get('result',(req,res)=>
{
	console.log('Succcess');
})

router.post('/post', function(req, res) {
   let name = req.body.name;
   let email = req.body.email;
   let password=req.body.password;
 
   req.checkBody('name', ('Name is required')).notEmpty();
   req.checkBody('email', 'Email is required').notEmpty();
   req.checkBody('email','Email is not valid').isEmail();
   req.checkBody('password','Password is not empty').notEmpty();

   var errors = req.validationErrors();
   // console.log(typeof errors);
   console.log(errors);
   if(errors){
      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/signUp');
   }
   else{
      req.session.success = true;
   res.redirect('/signUp');
}
});

router.get('/result',(req,res)=>
{
	console.log('Login successful');
});


module.exports = router;