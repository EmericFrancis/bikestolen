var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/location', function(req, res) {
  var stolen = req.session.data['reported']

  if (stolen == "No"){
    res.redirect('/location')
  }

  else{
    res.redirect('/ineligible')
  }
})

router.post('/map', function(req, res) {
  var therenow = req.session.data['location']

  if (therenow == "Yes"){
    res.redirect('/map')
  }

  else{
    res.redirect('/manual-location')
  }
})

router.post('/contact-detials', function(req, res) {
  var correctlocation = req.session.data['map']

  if (correctlocation == "Yes"){
    res.redirect('/contact-detials')
  }

  else{
    res.redirect('/manual-location')
  }
})

module.exports = router
