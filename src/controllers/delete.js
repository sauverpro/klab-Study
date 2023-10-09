let database = require("../utils/mockaData");

const deleteNews = (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        // Use filter() to remove item with the specified ID from the database array
        const updatedDatabase = database.filter((user) => user.id === parseInt(id));

        if (updatedDatabase.length !== -1) {
            // Item was removed, send success response
            database.splice(updatedDatabase,1)
            
            res.status(200).json({ status: 200, message: "Deleted successfully", data: database });
        } else {
            // Item with specified ID was not found, send failure response
            res.status(404).json({ status: 404, message: "Item not found", data: database });
        }
    } catch (error) {
        console.error(error);
        // Internal server error, send error response
        res.status(500).json({ status: 500, message: "Internal server error" });
    }
};

module.exports = deleteNews;
