const express = require('express')
const projects = express.Router()
//add new import below
const Project = require('../models/project')

//INDEX
projects.get('/', (req, res)=>{
    // res.send('My Index Project Page at /projects')
    // res.send(Project)
    res.render('Index', 
    {
        projects: Project
    }
    )
})

//SHOW
projects.get('/:arrayIndex', (req, res)=>{
    res.send(Project[req.params.arrayIndex])
})

module.exports = projects