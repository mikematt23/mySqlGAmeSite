const userActions = require('../modles/userModles')
const bcrypt = require('bcrypt')

async function logIn (req,res){
  const name = req.body.userName
  const password = req.body.password
  const user = await userActions.logIn(name)
  console.log(user)
  if(user[0].length === 0){
    return res.render('404',{m : "User name or password is not correct"})
  }
  if(user){
    const hash = user[0][0].password
    const isUser = await bcrypt.compare(password,hash);
    if(!isUser){
       res.render('404',{m: "Please check your information and try again"})
    }

    res.locals.isAuth = true
    req.session.user = user[0][0]
    req.session.save(function(){
      res.render('user',{user: user[0][0]})
    })
   
  }
}

module.exports = {
  logIn: logIn,
}