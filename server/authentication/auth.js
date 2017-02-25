let router = require('express').Router()
let Users = require('../models/user')

router.post('/api/register', (req, res) => {
  Users.create(req.body)
    .then((user) => {
      req.session.uid = user._id
      req.session.save()
      user.password = null
      delete user.password
      res.send({
        message: 'Successfully created user account', 
        data: user
      })
    })
    .catch(err => {
      res.send({ error: err })
    })
})


router.post('/api/login', (req, res) => {
  console.log("(server side) In auth.js router.post api/login.")
  Users.findOne({ email: req.body.email })
    .then(user => {
      //we use a validate password method of the user schema to confirm the login information.
      //the method code is in user.js
      user.validatePassword(req.body.password)
        .then(valid => {
          if(!valid){
            //If not a valid e-mail return a message object. 
            return res.send({error: 'Invalid Email or Password'})
          }
          //If you reach this part of the code the login was successful. 
          //set the session id and save it.  
          req.session.uid = user._id;
          req.session.save()
          user.password = null
          delete user.password
          res.send({
            message: 'successfully logged in',
            data: user
          })
        })
        .catch(err => {
          res.send({ error: err || 'Invalid Email or Password' })
        })
    })
    .catch(err => {
      res.send({
        error: err,
        message: 'Invalid Email or Password'
      })
    })
})

router.delete('/api/logout', (req, res) => {
  req.session.destroy()
  res.send({
    message: 'You have successfully been logged out. Please come back soon!'
  })
})


router.get('/api/authenticate', (req,res) => {
 console.log(req.session)
  Users.findById(req.session.uid).then(user => {
    return res.send ({
      data: user
    })
  }).catch(err=>{
    return res.send({
      error:err 
    })
  })
})

module.exports = router