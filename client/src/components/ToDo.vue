<template lang="html">
  <div>
    <form v-on:submit='addTodo($event)'>
    <table style= "width:20%">
      <caption> Enter your ToDo </caption>
      <tr>
      <td ><input type='text' placeholder='Enter Todo' v-model='newTodo'/></td>
      </tr>
      <tr>
      <td ><input type='text' placeholder='Enter Description' v-model='newElse'/></td>
      </tr>
      <tr>
      <td ><Datepicker v-model="date" placeholder='Click for date' ></Datepicker></td>
      </tr>
      <tr>
      <td ><input type='submit' /></td>
      </tr>
    </table>
    </form>

    <ul>
    <table id="t01">
    <caption> Your To Do List {{$store.state.userid}}</caption>
    <thead>
      <tr>
        <th>ToDo</th>
        <th>Description</th>
        <th>Date</th>
        <th>Applicable</th>
      </tr>
    </thead>
    <tr v-for='todo in todos' :key='todo._id'>
    <td>{{todo.title}}</td>
    <td>{{todo.Else}}</td>
    <td>{{todo.Date}}</td>
    <td><input type='checkbox' @click='deleteTodo(todo._id)'></td>
    </tr>
    </table>
    </li>
    </ul>
  </div>
</template>

<script>
import ToDoAPI from '@/services/ToDoApi.js'
import store from '@/store/store.js'
import Datepicker from 'vuejs-datepicker'
export default {
  components:{
  'Datepicker': Datepicker
  },
  data () {
    return {
      newTodo: '',
      newElse: '',
      test: '',
      date: '',
      todos: []
    }
  },
  mounted () {
    this.loadTodos()
  },
  methods: {
    async addTodo (evt) {
      evt.preventDefault() // prevents the form's default action from redirecting the page
      const response1 = await ToDoAPI.addTodo({'UID':this.$store.state.userid, 'title': this.newTodo, 'Else': this.newElse,'Date':this.date})
      this.todos.push(response1.data)
      this.test= this.$store.state.userid
      this.newTodo = '' // clear the input field
    },
    async loadTodos () {
      const response = await ToDoAPI.getToDos({'search': this.$store.state.userid})
      this.todos = response.data

    },
    deleteTodo (todoID) {
      ToDoAPI.deleteToDo(todoID)
      this.todos = this.todos.filter(function (obj) {
        return obj._id !== todoID
      })
    }
  }
}
</script>

<style lang="css">
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
}
table#t01 {
  width: 100%;
  background-color: #f1f1c1;
}
</style>
