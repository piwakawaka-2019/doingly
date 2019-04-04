exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('task_id').primary()
    table.string('description')
    table.string('status')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}