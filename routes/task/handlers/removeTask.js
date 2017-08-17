const Task = require('../../../models/Task')

function removeTask (req, res) {
  const { id } = req.params
  Task.findByIdAndRemove(id)
    // .then(tasks => res.render('tasks', { tasks }))
    .then(()=> res.send('Todo OK'))
    .catch(() => res.send(`FAIL!! Task w/ id ${id} was NOT removed`))
}

module.exports = removeTask
