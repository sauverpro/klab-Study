const router = require('express').Router();
const update= require("../controllers/update.controller")

router.patch('/:paramid',update);

module.exports = router;