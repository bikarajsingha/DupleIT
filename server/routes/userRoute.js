const express = require('express');
const router = express.Router();

const { postCreateUser, postLogIn } = require('../controllers/userController')

router.post('/create-user', postCreateUser);
router.post('/log-in', postLogIn)

module.exports = router;