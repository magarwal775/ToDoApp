// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express() // create your express app
// make app use dependencies
const mongo = require('mongodb')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
const MongoClient = mongo.MongoClient
const uri = "mongodb+srv://magarwal775:Pinki%40123@cluster0-ncdz0.mongodb.net/Summers?retryWrites=true"
const uri2 = "mongodb+srv://magarwal775:Pinki%40123@cluster0-ncdz0.mongodb.net/Users?retryWrites=true"

var client;
var mongoClient = new MongoClient(uri, { reconnectTries :
Number.MAX_VALUE, autoReconnect : true, useNewUrlParser : true })
mongoClient.connect((err, db) => { // returns db connection
  if (err != null) {
    console.log(err)
    return
  }
  client = db
})
var mongoClient2 = new MongoClient(uri, { reconnectTries :
Number.MAX_VALUE, autoReconnect : true, useNewUrlParser : true })
mongoClient.connect((err, db) => { // returns db connection
  if (err != null) {
    console.log(err)
    return
  }
  client2 = db
})
app.post('/todo', (req, res) => {
  const collection = client.db("Summers").collection("ToDo")
  var query= {UID:req.body.s.search}
  collection.find(query).toArray(function (err, results) {
    if (err) {
      console.log(err)
      res.send([])
      return
    }
    console.log(results)
    res.send(results)
  })
})
app.post('/checkUser', (req, res) => {
  const collection = client.db('Users').collection('userinfo')
  var query= {user: req.body.user1.user}
  collection.find(query).toArray(function (err, results) {
    if (err) {
      console.log(err)
      res.send('')
      return
    }
    console.log(req.body.user1.user)
    results.push({id:'1234',user: 'default',password:''})
    console.log(results)
    res.send(results)
  })
})
app.post('/addTodo', (req, res) => {
  const collection = client.db('Summers').collection('ToDo')
  var todo = req.body
  console.log(req.body) // parse the data from the request's body
  collection.insertOne(req.body.todo, function (err, results) {
    if (err) {
      console.log(err)
      res.send('')
      return
    }
    res.send(results.ops[0]) // returns the new document
  })
})
app.post('/addUser', (req, res) => {
  const collection = client2.db('Users').collection('userinfo')
  var todo = req.body
  console.log(req.body) // parse the data from the request's body
  collection.insertOne(req.body.user, function (err, results) {
    if (err) {
      console.log(err)
      res.send('')
      return
    }
    console.log(results.ops[0])
    res.send(results.ops[0]) // returns the new document
  })
})
app.post('/deleteToDo',(req,res)=>{
  const collection= client.db('Summers').collection('ToDo')
  collection.removeOne({'_id': mongo.ObjectID(req.body.todoID)},   function (err, results) {
  if (err) {
    console.log(err)
    res.send('')
    return
  }
  res.send() // return
})

})
app.listen(process.env.PORT || 8081) // client is already running on 8080
