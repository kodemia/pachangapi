
const mongoose = require('mongoose')

const itemSchema = require('./item')

  // name = ''
  // date ''
  // items: [{
  //  name: '',
  //  quantity: 0
  //  carrier: ''
  //}]
  // location ferfwfew

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  items: {
    type: [itemSchema]
  },
  location: {
    type: String,
    minlength: 5,
    maxlength: 120,
    required: true
  }
})

module.exports = mongoose.model('Event', eventSchema)


