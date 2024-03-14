const Ticket = require('../models/ticket')
const Flight = require('../models/flight')


module.exports = {
    new: newTicket,
    create,
    show,
}



async function newTicket(req, res) {
    const flightID = req.params.id
    res.render('tickets/new', {flightID});
    // (i had this itnthe preiovus like)seat: 'Add Ticket' 
}


async function create(req, res) {
    console.log(req.body)
    const newTicket = await Ticket.create(req.body);
    newTicket.flight = req.params.id
    newTicket.save()
  res.redirect(`/flights/${req.params.id}`);   //`flights/${req.params.id}`
}


async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: flight._id})
        console.log('LOOK:', tickets)
        res.render(`/flights/${req.params.id}`, {tickets, flight });
}
