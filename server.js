const express = require('express')
require('dotenv').config()
const app = express()
const methodOverride = require('method-override')

//MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//STYLING
app.use(express.static('public'))

app.get('/', (req,res)=>{
	res.send("Welcome to my project app!")
})

const PORT = process.env.PORT

const projectsController = require('./controllers/projects_controller')
app.use('/projects', projectsController)

app.get('*', (req, res)=>{
 res.send('404 message')
})

app.listen(PORT)