exports.seed = function (knex, Promise) {
  return knex('assignments').del()
    .then(function () {
      return knex('assignments').insert([{
          assignment_id: 1,
          user_id: 5,
          task_id: 1
        },
        {
          assignment_id: 2,
          user_id: 4,
          task_id: 2
        },
        {
          assignment_id: 3,
          user_id: 3,
          task_id: 5
        },
        {
          assignment_id: 4,
          user_id: 2,
          task_id: 4
        },
        {
          assignment_id: 5,
          user_id: 1,
          task_id: 3
        }
      ])
    })
}