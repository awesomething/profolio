const React = require('react')
const Default = require('./layout/default')

function Index({ projects }){
    return (
        <Default>
            <h2>Index</h2>
            {/* <p> I want to see my first {projects[0].name} project</p> */}
            <ul>
            {
                projects.map((project, index)=>{
                    return (
                        <li key={index}>
                            <a href={`/projects/${index}`}>
                                {project.name} </a>
                        </li>
                        )
                    })
                }
            </ul>
            <div>
                <a href='/projects/new'>
                    <button>Add New Project</button>
                </a>
            </div>
        </Default>
    )
}

module.exports = Index