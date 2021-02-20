const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/fonts', (req, res) => {
  const data = [
    { id: 'font-1', name: 'Font 1' },
    { id: 'font-2', name: 'Font 2' },
    { id: 'font-3', name: 'Font 3' },
    { id: 'font-4', name: 'Font 4' },
    { id: 'font-5', name: 'Font 5' }
  ]
  res.json({ data })
})

module.exports = app
