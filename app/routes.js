var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/01/location', function(req, res) {
  var stolen = req.session.data['reported']

  if (stolen == "No"){
    res.redirect('/01/location')
  }

  else{
    res.redirect('/01/tracking')
  }
})

router.post('/01/map', function(req, res) {
  var therenow = req.session.data['location']

  if (therenow == "Yes"){
    res.redirect('/01/map')
  }

  else{
    res.redirect('/01/manual-location')
  }
})

router.post('/01/contact-details', function(req, res) {
  var correctlocation = req.session.data['map']

  if (correctlocation == "No"){
    res.redirect('/01/manual-location')
  }

  else{
    res.redirect('/01/contact-details')
  }
})

module.exports = router
