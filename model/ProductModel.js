const db = require('../config/db');

const Products = {
    getAll: (callback) => {
        const query = "SELECT * FROM products"; // Using uppercase SQL keywords is a good practice
        db.query(query, callback);
    }
};

module.exports = Products; // Exporting the correct object name
