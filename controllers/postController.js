const userActions = require('../modles/userModles')
const bcrypt = require('bcrypt')





async function userSignUp(req,res){
  console.log(req.body)
  const name = req.body.userName
  const password = req.body.password
  const email = req.body.email
  const level = 0
  const lives = 4
  
  // const hashedPassword = await bcrypt.hash(password,3)
  let userCheck = await userActions.logIn(name)
  console.log(userCheck[0].length)
  if(userCheck[0].length === 1){
   return res.render('404',{m: "You already have an account please sing in"})
  }

  await userActions.insertUser(name,hashedPassword,email,level,lives)
  res.redirect('/logIn')
}



async function logIn (req,res){
  const name = req.body.userName
  const password = req.body.password
  const user = await userActions.logIn(name)
  console.log(user[0].length)
  if(user[0].length === 0){
    return res.render('log-in',{m : "User name or password is not correct"})
  }
  // if(user){
  //   const hash = user[0][0].password
  //   const isUser = await bcrypt.compare(password,hash);
  //   if(!isUser){
  //      res.render('404',{m: "Please check your information and try again"})
  //   }

  //   res.locals.isAuth = true
  //   req.session.user = user[0][0]
  //   req.session.save(function(){
  //     res.render('user',{user: user[0][0]})
  //   })
   
  // }
}

module.exports = {
  logIn: logIn,
  userSignUp: userSignUp
}