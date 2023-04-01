const React = require("react");
const Default = require("./layout/default");

function New() {
  return (
    <Default>
      <h2>Add New Project</h2>
      <form action="/projects" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required/>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="hasDatabase">Has Database</label>
        <input
          type="checkbox"
          name="hasDatabase"
          id="hasDatabase"
          defaultChecked
        />
        <br />
        <input type="submit" />
      </form>
      <div>
      <a href='/projects'>
        <button>Back to Projects</button>
      </a>
      </div>
    </Default>
  );
}

module.exports = New;
