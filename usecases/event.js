
const Event = require('../models/event')

function create ({ name, location, items, date }) {
  return Event.create({ name, location, items, date })
}

function getAll () {
  return Event.find({}).lean() 
}

function getById (id) {
  return Event.findById(id).lean()
}

async function assignCarrier (eventId, indexItem, carrierName) {
  const event = await Event.findById(eventId)
  event.items[indexItem].carrier = carrierName
  return event.save()
}

module.exports = {
  create,
  getAll,
  getById,
  assignCarrier
}
