exports.up = (knex, Promise) => {
  return knex.schema.createTable('assignments', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('task_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('assignments')
}