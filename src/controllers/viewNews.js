const database = require("../utils/mockaData")
const getData = (req, res) => {
    res.status(200).json({"status":200, "data":database})
}

module.exports = getData;