const User = require('../models/admin');
const bcrypt=require('bcrypt');

exports.getLogin = (req, res, next) => {
  const message=req.flash('error');
  if(message.length>0)
  {
    var errorMsg=message[0];
  }
  else{
    errorMsg=null;
  }
  res.render('login/login', {
    pageTitle: 'Login',
    logo:'images/logo.svg',
    isAuthenticated: false,
    errorLogin: errorMsg
  });
};



exports.postLogin = (req, res, next) => {
  const username=req.body.username;
  const password=req.body.password;
  User.findOne({username:username})
    .then(user => {
      if(!user)
      {
        req.flash('error','Invalid email & password');
        return res.redirect('/login');

        /*return bcrypt.hash('12345',10)
        .then(hash=>{
            const newUser=new User({
                username:'athiq07',
                password:hash               
            });
           newUser.save().then(result=>{
               console.log('account created');
               return res.redirect('/login');
           })
        })
        .catch(err=>{
            console.log(err);
        });*/
       

        
        
      }
      bcrypt.compare(password,user.password).then(doMatch=>{
         if(doMatch)
         {
          req.session.isLoggedIn = true;
          req.session.user = user;
          req.session.save(err => {
            console.log(err);
            res.redirect('admin/dashboard');
          });
         }
         else{
          req.flash('error','Invalid email & password');
         res.redirect('/login');
         } 

      }).catch(err=>{console.log(err)});
      
      
    })
    .catch(err => console.log(err));
};


exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    req.user="";
    res.redirect('/');
  });
};
