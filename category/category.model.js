const db = require('../config/db');
const { DataTypes } = require('sequelize');

const category = db.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = category;