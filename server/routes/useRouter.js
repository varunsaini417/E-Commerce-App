const userControler = require('../controllers/userControl');

const router = require('express').Router();


router.post('/register', userControler.register)

module.exports = router;