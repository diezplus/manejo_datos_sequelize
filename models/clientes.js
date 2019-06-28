// users.js

module.exports = function(sequelize, DataTypes) {

    return sequelize.define("cliente", {
        codCliente: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 6]
            }
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nifCif: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [9, 9]
            }
        },
        domicilio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
        codigoPostal: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 5]
            }
        },
        poblacion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        }
    });
};
