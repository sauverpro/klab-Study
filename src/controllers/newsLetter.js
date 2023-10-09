const database = require("../utils/mockaData")
const addNews = (req, res) => {
    try {
        let users = req.body;
        console.log(users);
        database.push(users);
        res.status(201).json({
            message: "user created",
            data: database
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = addNews;