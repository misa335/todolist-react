
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo_list').insert([
        {id: 1, todo: 'feed cats', due_day: '3/27/2021'},
        {id: 2, todo: 'gloseries', due_day: '3/28/2021'},
        {id: 3, todo: 'laundries', due_day: '3/28/2021'}
      ]);
    });
};
