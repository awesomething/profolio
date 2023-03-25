const React = require('react')
const Default = require('./layout/default')

function Show({ project }) {
  return (
    <Default>
        <h2>Show Pages</h2>
        <h3>{project.name}</h3>
        <p>and it 
            {
                project.hasDatabase ? <span> does </span> 
                : <span> does not </span>
            }
            have a database
        </p>
        <img src={project.image} alt={project.name}/>
        <li><a href='/projects'> Home </a></li>
    </Default>
  )
}

module.exports = Show