const gameActions = require("../modles/gameActions")

const Number = Math.floor(Math.random() * 11);

async function startGame(req,res){
  console.log(req.session.user)
  await gameActions.resetLives(req.session.user.usersID)
  await gameActions.updateLevel(1, req.session.user.usersID)
  res.locals.isAuth = true
  let number = Number
  req.session.save(function(){
    res.render('level1', {lives: 4, number: number, message : ""})
  })
}


module.exports ={
  startGame: startGame 
}