const express = require('express');
const router = express.Router();

const  { 
  loginToAccount,
  createNewAccount,
  logoutAccount
} = require('../controllers/auth');

router.post('/login', loginToAccount);
router.post('/signup', createNewAccount);
router.get('/logout', logoutAccount);

module.exports = router;
