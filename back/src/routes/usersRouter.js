const { Router } = require('express');

const router = Router();

const { 
    storeUser
} = require('../controller/usersController')

router.post('/register', storeUser);
router.post('/login', storeUser);

module.exports = router;