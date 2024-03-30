const express = require('express');
const router = express.Router();

const  { 
  getAllUsers,
  updateUser
} = require('../controllers/users');

router.get('/load', getAllUsers);
router.post('/update', updateUser);

module.exports = router;
