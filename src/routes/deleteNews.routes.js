const router = require('express').Router()
const deleteNews = require("../controllers/delete")
router.delete("/:id", deleteNews)
module.exports = router
