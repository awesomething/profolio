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

// //INDEX DETAILS
// projects.get('/:arrayIndex', (req, res)=>{
//     res.send(Project[req.params.arrayIndex])
// })

//NEW
projects.get('/new',(req,res)=>{
    res.render('new')
})

//SHOW
projects.get('/:arrayIndex', (req, res)=>{
    if(Project[req.params.arrayIndex]){
        res.render('Show', {
            project: Project[req.params.arrayIndex],
            index: req.params.arrayIndex
        })
    }else{
        res.send('Not found, go back!')
    }
})

//DELETE
projects.delete('/:indexArray', (req,res)=>{
    Project.splice(req.params.indexArray, 1)
    res.status(303).redirect('/projects')
})

//CREATE
projects.post('/', (req,res)=>{
    if(!req.body.image){
        req.body.image = 'https://images.unsplash.com/photo-1583916438680-f047ee7a5aad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    }
    //console.log(req.body)
    if(req.body.hasDatabase === 'on'){
        req.body.hasDatabase = 'true'
    }else{
        req.body.hasDatabase = 'false'
    }
    Project.push(req.body)
    res.redirect('/projects')
})

module.exports = projects