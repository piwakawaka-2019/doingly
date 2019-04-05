const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
 res.render('partials/intro');
})

router.get('/home', (req, res) => {
      res.render('partials/index');
     })

router.get('/tasks', (req, res) => {
      Promise.all([
             db.GetAssignmentByStatus('Backlog'),
             db.GetAssignmentByStatus('To Do'),
             db.GetAssignmentByStatus('Done'),
             db.GetAssignmentByStatus('Ongoing'),
      ])
      .then(results => {

            let keys = ['backlog', 'todo', 'done', 'ongoing']
            let kanban = {}
            keys.forEach((key,i) => {
                  kanban[key] = results[i]
            })



            // console.log(obj)
            // results.map( x => {
            //       let obj = {}
            //       let newKey = x[0].status
            //       obj[newKey] = x
            //       console.log(obj)
            // })
            console.log('kanban: ', kanban);
            res.render('partials/overview', kanban)
            console.log('kanban: ', kanban);
            
      })

// { backlog:
//    [ { id: 5,
//        description: 'Git Push',
//        status: 'Backlog',
//        user_id: 5,
//        task_id: 1,
//        first_name: 'Blaine',
//        last_name: 'Western',
//        image: null 
//       },
//      { id: 3,
//        description: 'Styling',
//        status: 'Backlog',
//        user_id: 3,
//        task_id: 5,
//        first_name: 'Cliff',
//        last_name: 'Ah-Leong',
//        image: null } 
//       ],
//   todo:
//    [ { id: 4,
//        description: 'Site Map',
//        status: 'To Do',
//        user_id: 4,
//        task_id: 2,
//        first_name: 'Ashleigh',
//        last_name: 'Vivier',
//        image: null } ],
//   done:
//    [ { id: 2,
//        description: 'Migrations',
//        status: 'Done',
//        user_id: 2,
//        task_id: 4,
//        first_name: 'Fud',
//        last_name: 'Z',
//        image: null } ],
//   ongoing:
//    [ { id: 1,
//        description: 'Routes',
//        status: 'Ongoing',
//        user_id: 1,
//        task_id: 3,
//        first_name: 'Vinnie',
//        last_name: 'Reid',
//        image: null } ] 
// }



      // db.GetAssignmentByStatus('To Do')

      // db.GetAssignmentByStatus('Done')

      // db.GetAssignmentByStatus('Ongoing')
})

router.get('/addUser', (req, res) => {
      res.render('partials/addUser');
})

router.get('/addTask', (req, res) => {
      res.render('partials/addTask');
})
router.get('/editTask', (req, res) => {
      db.getTasks().then(x =>{
          
            res.render('partials/editTask', {x:x});
      });
      
})

router.post(`/addTask`, async (req, res) => {
      try{
      console.log('req.body: ', req.body);

      let userID = req.body.userID;

      let task = {
            description: req.body.description,
            status: req.body.status
      }

      let taskID = await db.makeTask(task);
      taskID = taskID[0]

      await db.makeAssignment({user_id:userID, task_id:taskID});
      
      res.redirect(`/tasks`);
      }
      catch(error){
            console.log(error);
      }
})
 
 router.post(`/editTask`, (req, res) => {
 let task = {
      id: req.body.taskID,
      status: req.body.status,
      description: req.body.description

 }
 
 db.editTask(task)
 .then(res.redirect(`/tasks`))
 })

module.exports = router
