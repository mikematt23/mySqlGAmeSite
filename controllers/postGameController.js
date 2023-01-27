const gameActions = require('../modles/gameActions')

const level2 = Math.floor(Math.random() * 101);
const level3 = Math.floor(Math.random() * 1001)

async function testLevelOne(req,res){
  console.log(req.session.user)
  if(req.body.guess > req.body.anwser){
    let lives = await gameActions.getLives(req.session.user.usersID)
    await gameActions.updateLives(req.session.user.usersID, lives[0][0].lives)
    lives = await gameActions.getLives(req.session.user.usersID)
    if(lives[0][0].lives == 0){
      res.locals.isAuth = true 
     res.render('gameOver')
    }
    res.locals.isAuth = true
    return res.render('level1',{message : "Your Number is HIGHER", lives : lives[0][0].lives , number : req.body.anwser})
  }
  
  if(req.body.guess < req.body.anwser){
    let lives = await gameActions.getLives(req.session.user.usersID)
    await gameActions.updateLives(req.session.user.usersID, lives[0][0].lives)
    lives = await gameActions.getLives(req.session.user.usersID)
    if(lives[0][0].lives == 0){
      res.locals.isAuth = true 
      res.render('gameOver')
     }
     res.locals.isAuth = true
    return res.render('level1',{message : "Your Number is LOWER", lives : lives[0][0].lives, number : req.body.anwser})
  }

  if(req.body.guess === req.body.anwser){
    
    await gameActions.updateLevel(2,req.session.user.usersID)
    const lives = await gameActions.getLives(req.session.user.usersID)
    res.locals.isAuth = true 
    return res.render('level2' ,{message: "",number : level2, lives : lives[0][0].lives})
  }
}
//
async function testLevelTwo (req,res){
  if(req.body.guess > req.body.anwser){
    let lives = await gameActions.getLives(req.session.user.usersID)
    await gameActions.updateLives(req.session.user.usersID, lives[0][0].lives)
    lives = await gameActions.getLives(req.session.user.usersID)

    if(lives[0][0].lives == 0){
       res.locals.isAuth = true 
       res.render('gameOver')
     }
     res.locals.isAuth = true
     res.render('level2',{message : "Your Number is HIGHER", lives : lives[0][0].lives , number : req.body.anwser})
  }
  
  if(req.body.guess < req.body.anwser){
    let lives = await gameActions.getLives(req.session.user.usersID)
    await gameActions.updateLives(req.session.user.usersID, lives[0][0].lives)
    lives = await gameActions.getLives(req.session.user.usersID)
    
    if(lives[0][0].lives == 0){
      res.locals.isAuth = true 
      res.render('gameOver')
     }
    res.locals.isAuth = true
    return res.render('level2',{message : "Your Number is LOWER", lives : lives[0][0].lives, number : req.body.anwser})
  }

  if(req.body.guess === req.body.anwser){
    
    res.locals.isAuth = true
    await gameActions.updateLevel(3,req.session.user.usersID)
    const lives = await gameActions.getLives(req.session.user.usersID)
    return res.render('level3' ,{message: 'correct', number : level3, lives : lives[0][0].lives})
  }
}
//
async function testLevelThree(req,res){
  if(req.body.guess > req.body.anwser){
    let lives = await gameActions.getLives(req.session.user.usersID)
    await gameActions.updateLives(req.session.user.usersID, lives[0][0].lives)
    lives = await gameActions.getLives(req.session.user.usersID)
    
    if(lives[0][0].lives == 0){
      res.locals.isAuth = true 
      res.render('gameOver')
     }
     res.locals.isAuth = true
    return res.render('level3',{message : "Your Number is HIGHER", lives : lives[0][0].lives , number : req.body.anwser})
  }
  
  if(req.body.guess < req.body.anwser){
    let lives = await gameActions.getLives(req.session.user.usersID)
    await gameActions.updateLives(req.session.user.usersID, lives[0][0].lives)
    lives = await gameActions.getLives(req.session.user.usersID)

    if(lives[0][0].lives == 0){
      res.locals.isAuth = true 
      res.render('gameOver')
     }
     res.locals.isAuth = true
    return res.render('level3',{message : "Your Number is LOWER", lives : lives[0][0].lives, number : req.body.anwser})
  }

  if(req.body.guess === req.body.anwser){
    res.locals.isAuth = true
    await gameActions.updateLevel(3,req.session.user.usersID)
    const lives = await gameActions.getLives(req.session.user.usersID)
    return res.render('user' ,{user:req.session.user})
  }
}

module.exports ={
  testLevelOne: testLevelOne,
  testLevelTwo: testLevelTwo,
  testLevelThree:testLevelThree
}