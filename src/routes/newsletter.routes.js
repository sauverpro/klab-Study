const router = require('express').Router();
const addNews= require("../controllers/newsLetter")
router.post('/',addNews)
module.exports = router;