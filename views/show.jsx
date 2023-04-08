const React = require('react')
const Default = require('./layout/default')

function Show({ project, index }) {
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
        <form action={`/projects/${index}?_method=DELETE`} method='POST'>
          <input type='submit' value='DELETE'/>
        </form>
    </Default>
  )
}

module.exports = Show