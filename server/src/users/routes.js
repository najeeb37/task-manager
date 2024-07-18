const { Router } = require('express');
const controller = require('./controller');
const { body } = require('express-validator');

const router = Router();

router.get('/', (req, res) => {
  res.send('User Home Page');
});

// router.get('/users', controller.authenticateToken, controller.getUsers);
router.get('/users',  controller.getUsers)
router.get('/users/:id', controller.authenticateToken, controller.getUserById);
router.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], controller.addUser);
router.post('/login', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], controller.loginUser);

module.exports = router;