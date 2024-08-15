const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Produto = sequelize.define('Produto', {
    nomeProduto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Produto;
