const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
 res.render('partials/index');
})


router.get('/tasks/', (req, res) => {
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

            res.render('partials/overview')
            
      })

      // db.GetAssignmentByStatus('To Do')

      // db.GetAssignmentByStatus('Done')

      // db.GetAssignmentByStatus('Ongoing')
})
module.exports = router
