const express = require('express')
const port = process.env.PORT || 3000
var moment = require('moment')

var app = express()

app.get('/:param', (req, res) => {
  if (moment(req.params.param).isValid()) {
    res.send({
      unix: moment(req.params.param).unix(),
      natural: req.params.param
    })
  } else if (moment.unix(req.params.param).isValid()) {
    res.send({
      unix: req.params.param,
      natural: (moment.unix(req.params.param)).format('MMM D, YYYY')
    })
  } else {
    res.send('This is not a unix')
  }
})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})
