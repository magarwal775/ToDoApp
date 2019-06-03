import API from '@/services/API'
export default {
  getToDos (s) {
    return API().post('todo',{s:s})
  },
  addTodo (todo) {
    return API().post('addTodo', {
      todo: todo // add our data to the request body
    })
  },
  deleteToDo (todoID) {
    return API().post('deleteToDo', {todoID: todoID})
  },
  addUser (user) {
    return API().post('addUser', {user: user
    })
  },
  checkUser(user1){
    return API().post('checkUser',
  {
    user1: user1
  })
  }
}
