const database = require("../utils/mockaData")
 const user= (req, res) => {
    try {
        let {paramid} = req.params;
        console.log(req.params);
        console.log(database);
        data = database.find((user) => {
            return user.id == parseInt(paramid) 
        })
        console.log(data);
        res.status(200).json({
            message: "News has found",
            data: data
        })
    } catch (error) {
        console.log(error);
    }

}
module.exports = user