# manejo_db


1º Paso:
-------------------------------------------------------------------------
Instalar
'sequelize' (https://github.com/sequelize/sequelize) 
y
'sequelize-cli' (https://github.com/sequelize/cli)
con npm

2º Paso:
-------------------------------------------------------------------------

Ejecutamos $ sequelize init

Nos crea estructura de carpetas


3º Paso:
-------------------------------------------------------------------------

Una vez que tenemos la estructura de las carpetas, en 'config.json'
pondremos los datos de acceso a la base de datos.

~~~
{
  "development": {
    "username": "fmarco",
    "password": "",
    "database": "desarrollo01_dev",
    "host": "pgsql.server.com",
    "dialect": "postgres"
  },
  "test": {
     "username": "fmarco",
    "password": "",
    "database": "desarrollo01_test",
    "host": "pgsql.server.com",
    "dialect": "postgres"
  },
  "production": {
    "username": "fmarco",
    "password": "",
    "database": "prod_desarrollo01",
    "host": "pgsql.server.com",
    "dialect": "postgres"
  }
}
~~~


4º Paso:
----------------------------------------------------------------------------

Dentro de la carpeta 'models' tenemos 'index.js' que es el encargado de procesar los modelos y
devolver un objeto 'db' para manejar la base de datos.

Crearemos tantos archivos.js como modelos queramos crear, un modelo por cada tabla de la base de datos.

Ej.:

'Users.js'
~~~
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
~~~









