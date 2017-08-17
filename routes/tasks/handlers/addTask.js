const Task = require('../../../models/Task')

function addTask (req, res) {
  const { title } = req.body
  console.log(title)
  const task = new Task({ title })

  task.save()
    .then(() => res.redirect('/tasks'))
}

module.exports = addTask
