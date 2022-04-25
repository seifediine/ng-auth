const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

// Register Route
router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).send(registeredUser)
    }
  })
})

// Login Route
router.post('/login', (req, res) => {
  let userData = req.body

  // check if email exists
  User.findOne({ email: userData.email }, (error, matchedUser) => {
    if (error) {
      console.log(error)
    } else {
      if (!matchedUser) {
        res.status(401).send('Invalid email')
      } else {
        if (matchedUser.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          res.status(200).send(matchedUser)
        }
      }
    }
  })
})

module.exports = router
