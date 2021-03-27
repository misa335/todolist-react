
exports.up = function(knex, Promise) {
  return knex.schema.hasTable('todo_list')
    .then(function(exists) {
        if(!exists) {
            return knex.schema.createTable('todo_list', (table) => {
                table.increments('id').primary();
                table.string('todo', 100).notNullable();
                table.string('due_day');
            });
        } else {
            return new Error('The table already exists.');
        }
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.hasTable('todo_list')
        .then(function(exists) {
            if(exists) {
                return knex.schema.dropTable('todo_list');
            }
        });
};
