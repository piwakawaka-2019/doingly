const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers : getUsers,
  getUser : getUser,
  makeTask : makeTask,
  getUsersAssignments : getUsersAssignments,
  getTasksByStatus : getTasksByStatus,
  GetAssignmentByStatus: GetAssignmentByStatus,

}

function getUsers(db = connection){
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}

function makeTask(task, db = connection){
  return db('tasks').insert(task)
}

function getUsersAssignments(id, db = connection){
  return db('users')
  .join('assignments', 'users.id', '=', 'assignments.users_id')
  .where('user.id', id)
  .then( x => {
      return x.map(num =>{
          //delete num.id
          return num
      })
  })
}

function GetAssignmentByStatus(str, db = connection){
  return db('tasks')
  .join('assignments', 'tasks.id', '=', 'assignments.task_id')
  .join('users', 'assignments.user_id', '=', 'users.id')
  .where('tasks.status', str)
  
}

function getUserTasks(userId, db = connection){
  return db('tasks')
  .join('assignments', 'user.id', '=', 'assignments.users_id')
  .where('assignments.user_id', userId)
}

function getTasksByStatus(status){
  return db('tasks').where('status', status)
}

