const app = require('express');
const router = app.Router();

const { User } = require('../models/user')

const { authenticate } = require('../middleware/authenticate')

router.get('/', authenticate, async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (err) {
    res.status(400).send(err)
  }
})

// Get logged in user details
router.get('/token', authenticate, (req, res) => {
  res.send(req.user)
})

// Create new user
router.post('/add', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = new User({ email, password })
    await user.save()
    const token = await user.generateAuthToken()
    res.header('x-auth', token).send(user)
  } catch(err) {
    res.status(400).send(err)
  }
})

// Generate and return token (login)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findByCredentials(email, password)
    const token = await user.generateAuthToken()
    res.header('x-auth', token).send(user)
  } catch(err) {
    res.status(401).send(err)
  }
})

// Delete user token (logout)
router.delete('/logout', authenticate, async (req,res) => {
  try {
    await req.user.removeToken(req.token)
    res.status(200).send('Token deleted successfully')
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
