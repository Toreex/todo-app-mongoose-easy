console.log('Javascript ready to go...')

$('.remove').on('click', function (e) {
  const idTask = $(this).siblings('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then(msg => {
      window.location.reload()
      console.log(msg)
    })
})

$('.done').on('click', function (e) {
  const idTask = $(this).siblings('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'PUT'
  const data = { done: true }

  $.ajax({ url, method, data })
    .then(msg => {
      $(this).parent().addClass('task-done')
      console.log(msg)
    })
})

$('.allDone').on('click', function (e) {
  const idTask = $(this).siblings('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'PUT'
  const data = { done: true }

  $.ajax({ url, method, data })
    .then(msg => {
      $(this).parent().addClass('task-done')
      console.log(msg)
    })
})

$('.title-box span').on('click', function () {
  $(this).parent()
      .addClass('edit')
      .find('form input').focus()
  console.log('llego! addclass(edit)')
})

$('.title-box form').on('submit', function (e) {
  e.preventDefault()
  const newTitleTask = $(this).find('input').val()
  const idTask = $(this).closest('.task-item').find('.task-id').val()

  const url = `/task/${idTask}`
  const method = 'PUT'
  const data = { title: newTitleTask }

  $.ajax({ url, method, data })
    .done(msg => {
      $(this).siblings('span').text(newTitleTask)
      $(this).parent().removeClass('edit')
      window.location.reload()
    })
    .fail((err) => {
      console.log(err)
    })

  console.log(newTitleTask)
})
