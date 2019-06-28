// Manejo de bases de datos con Sequelize 

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('desarrollo01', 'fmarco', '', {
    host: 'pgsql.server.com',
    dialect: 'postgres',
    /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



const Model = Sequelize.Model;
class User extends Model {}
User.init({
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        set(val) {
            this.setDataValue('firstName', val.toUpperCase());
        }
    },
    lastName: {
        type: Sequelize.STRING,
        set(val) {
            this.setDataValue('lastName', val.toUpperCase());
        }
    },
    saldo: {
        type: Sequelize.DECIMAL(10, 2)
    },
    descripcion: {
        type: Sequelize.TEXT
    }
}, {
    sequelize,
    modelName: 'user'
    // options
});

sequelize.sync();




//Añadimos un registro
User.sync().then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
        firstName: 'Julito',
        lastName: 'Catedrales'
    });
});


// Mostrar todos los usuarios
User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
});
