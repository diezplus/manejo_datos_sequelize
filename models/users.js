// users.js

module.exports = function(sequelize, DataTypes) {

    return sequelize.define("user", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [7, 100]
            }
        },
        empresa: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 100]
            }
        },
        privilegios: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accesos: {
            type: DataTypes.INTEGER,
        },
        ultAcceso: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [7, 100]
            }
        }
    });
};
