const bcrypt = require('bcryptjs')
const userActions = require('../modles/userModles')



//test


async function userSignUp(req,res){
 
  const name = req.body.userName
  const password = req.body.password
  const email = req.body.email
  const level = 0
  const lives = 4
  
  const hashedPassword = await bcrypt.hash(password,3)
  console.log(hashedPassword)
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

  if(user[0].length === 0){
    return res.render('log-in',{m : "User name or password is not correct"})
  }
  if(user[0].length === 1){
    const salt = bcrypt.genSaltSync(3);
    const isUser = await bcrypt.compare(password,user[0][0].password);
    if(!isUser){
       res.render('log-in',{m: "User name or password is not correct"})
    }

    res.locals.isAuth = true
    req.session.user = user[0][0]
    req.session.save(function(){
      res.render('user',{user: user[0][0]})
    })

  }
}

function logOut (req,res){
  res.locals.isAuth = false
  res.redirect('/')
}

module.exports = {
  logIn: logIn,
  userSignUp: userSignUp,
  logOut: logOut
}