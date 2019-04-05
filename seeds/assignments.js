exports.seed = function (knex, Promise) {
  return knex('assignments').del()
    .then(function () {
      return knex('assignments').insert([{
          id: 1,
          user_id: 5,
          task_id: 1
        },
        {
          id: 2,
          user_id: 4,
          task_id: 2
        },
        {
          id: 3,
          user_id: 3,
          task_id: 5
        },
        {
          id: 4,
          user_id: 2,
          task_id: 4
        },
        {
          id: 5,
          user_id: 1,
          task_id: 3
        }
      ])
    })
}