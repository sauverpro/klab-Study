const router = require('express').Router();
const viewNews = require("../controllers/viewNews")
router.get('/', viewNews)
module.exports = router;