// Como modificar tablas en la db con migrations

//$ sequelize migration:create --name name_of_your_migration

//The migration file would look like this:

module.exports = {
    up: function(queryInterface, Sequelize) {
        // logic for transforming into the new state
        return queryInterface.addColumn(
            'Todo',
            'completed',
            Sequelize.BOOLEAN
        );

    },

    down: function(queryInterface, Sequelize) {
        // logic for reverting the changes
        return queryInterface.removeColumn(
            'Todo',
            'completed'
        );
    }
}

//And then, run it:

//$ sequelize db:migrate

/* 

If you want to add multiple columns to the same table, wrap everything in a Promise.all() and put the columns you'd like to add within an array:

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'tableName',
        'columnName1',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'tableName',
        'columnName2',
        {
          type: Sequelize.STRING
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('tableName', 'columnName1'),
      queryInterface.removeColumn('tableName', 'columnName2')
    ]);
  }
}; */
