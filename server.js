const express = require('express')
require('dotenv').config()
const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req,res)=>{
	res.send("Welcome to my project app!")
})
const PORT = process.env.PORT

const projectsController = require('./controllers/projects_controller')
app.use('/projects', projectsController)

app.listen(PORT)