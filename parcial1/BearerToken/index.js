// const { config } = require('dotenv')


// config()

fetch('https://api.github.com/users/PipeMtz/repos', {
  headers: {Authentication: `Bearer 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`}
})
   .then(resp => resp.json())
   .then(json => console.log(JSON.stringify(json)))

