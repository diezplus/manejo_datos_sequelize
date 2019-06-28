//models.js

/* ----------------------------------------------------------------------------
Cargamos todos los modelos de la base de datos en el objeto 'db'
y exportamos para poder utilizar el acceso a datos desde
cualquier parte de la aplicación.
En este proceso se crean todas las tablas si no existen ya en la base de 
datos, si existen se dejan tal cual están.
Cualquier modificación de las tablas lo haremos a través de 'migrations'
-----------------------------------------------------------------------------*/ 
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
//const env = 'development';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
}
else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión con la base de datos establecida con éxito.');
  })
  .catch(err => {
    console.error('Imposible conectar con base de datos: ', err);
  });


/*
Busca todos los modelos definidos en la carpeta 'models' y los asocia a la
base de datos abierta. 
Todos los modelos son archivos .js que exportan módulos con: 
module.exports = function(sequelize, DataTypes) {return ...};
*/

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; //contiene la configuración de la base de datos
db.Sequelize = Sequelize;

sequelize.sync();

module.exports = db;   //Exportamos para luego poder usar:       const db = require('./models/models.js');
