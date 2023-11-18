const { Router } = require('express');

const testRoute = require('./testRoute.js')

const router = Router();

router.use('/testRoute', testRoute)

module.exports = router;