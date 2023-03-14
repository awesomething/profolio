const React = require('react')

function Default(html){
    return (
        <html>
            <head>
                <title>Document</title>
            </head>
        <body>
            <h1>HTML Rendering</h1>
            <div>
                {html.children}
            </div>
        </body>
        </html>
    )
}

module.exports = Default