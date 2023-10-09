const database = require("../utils/mockaData")
const update = (req, res) => {
    try {
        const updateId = req.params.paramid;
        const newData = req.body;
        const user = database.find(user => user.id === parseInt(updateId));
        
        if (user) {
            if (newData.title) user.title = newData.title;
            if (newData.body) user.body = newData.body;
            
            res.status(200).json({
                status: 200,
                newData: database
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "User not found"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        });
    }
}
module.exports = update