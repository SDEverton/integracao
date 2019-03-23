export default function (sequelize, DataTypes) {

    const Produto = sequelize.define('Produto', {
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