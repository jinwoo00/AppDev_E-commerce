const db = require('../config/db');

const Products = {
    getAll: (callback) => {
        const query = "SELECT * FROM products"; // Using uppercase SQL keywords is a good practice
        db.query(query, callback);
    },
    getById: (id, callback) => {
        const sql = 'SELECT * FROM products WHERE id = ?';
        db.query(sql, [id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            // Assuming results[0] is the product
            callback(null, results[0]);
        });
    }
};

module.exports = Products; // Exporting the correct object name
