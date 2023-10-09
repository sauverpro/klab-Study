const router = require('express').Router();
const getNewsById= require("../controllers/getNewsById.controllers")

router.get('/:paramid',getNewsById);

module.exports = router;