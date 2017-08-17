const Task = require('../../../models/Task')

function updateTask (req, res) {
  const id = req.params.id
  const done = req.body.done === 'true'
  const title = req.body.title

  Task.findByIdAndUpdate(id, {title: title})

  .then(() => res.send(`element w/ id ${id} has been updated`)
    .catch((err) => {
      console.log('error on update', err)
      res.send('error on update')
    })
)
}

module.exports = updateTask
