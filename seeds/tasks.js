exports.seed = function (knex, Promise) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([{
          id: 1,
          description: "Git Push",
          status: "Backlog"
        },
        {
          id: 2,
          description: "Site Map",
          status: "To Do"
        },
        {
          id: 3,
          description: "Routes",
          status: "Ongoing"
        },
        {
          id: 4,
          description: "Migrations",
          status: "Done"
        },
        {
          id: 5,
          description: "Styling",
          status: "Backlog"
        }
      ])
    })
}