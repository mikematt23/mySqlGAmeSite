function home(req,res){
  req.session.isAuth = false
  res.render('home')
}
//
function logIn (req,res){
  res.render('log-in')
}
//
function signUp(req,res){
  res.render('sign-up')
}
//
function user(req,res){
  req.session.message = "You must first log-in or sign-up"
  if(!req.session.isAuth){
    return res.render('404.ejs',{m: req.session.message})
  }
  res,render('user')
}


module.exports ={
  home : home,
  logIn : logIn,
  signUp : signUp,
  user : user
}