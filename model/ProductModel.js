const db = require('../config/db');

const Product = {
    getAll:(callback) => {
        const query = "select * from product";
        db.query(query, callback);
    }
}