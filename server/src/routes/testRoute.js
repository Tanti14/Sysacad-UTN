const { Router } = require('express');
const { getTestRoute } = require('../controllers/testRoute.js');


const router = Router();

router.get('/', getTestRoute)

module.exports =  router;