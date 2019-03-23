"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Produto = sequelize.define('Produto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Produto;
}
exports.default = default_1;
