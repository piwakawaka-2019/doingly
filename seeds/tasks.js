exports.seed = function (knex, Promise) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([{
          task_id: 1,
          description: "Git Push",
          status: "Backlog"
        },
        {
          assignment_id: 2,
          description: "Site Map",
          status: "To Do"
        },
        {
          assignment_id: 3,
          description: "Routes",
          status: "Ongoing"
        },
        {
          assignment_id: 4,
          description: "Migrations",
          status: "Done"
        },
        {
          assignment_id: 5,
          description: "Styling",
          status: "Backlog"
        }
      ])
    })
}