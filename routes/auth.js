const express = require('express');
const router = express.Router();
const {
  loginUser,
  registerUser,
  delUser,
  updateUser,
} = require('../controllers/auth');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.delete('/delete', delUser);
router.put('/update', updateUser);

module.exports = router;
