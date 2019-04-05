exports.seed = function (knex, Promise) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([{
          id: 1,
          description: "Create routes to manage super cool pages",
          status: "Backlog"
        },
        {
          id: 2,
          description: "Draw up wire frames for each webpage",
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