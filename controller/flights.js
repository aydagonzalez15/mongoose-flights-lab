
const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,

}


async function show (req, res) {
    //// console.log('SEE ID HERE:', req.params.id)
    const flight =  await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: flight._id})
    ////console.log(flight)
    flight.destinations.sort((a, b) => a.arrivals - b.arrivals)
    console.log(tickets)
    res.render('flights/show', {
        flight, tickets
    })
}

async function index(req, res) {
    const flights = await Flight.find({}).sort({departs: 1})
    res.render('flights/index', { flights })
}

function newFlight(req, res) {
    const newFlight = new Flight()
////   console.log('NEW FLIGTH INFOR:', newFlight)
    dt = newFlight.departs
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    console.log(dt, departsDate)
    res.render('flights/new',  { departsDate, errorMsg: '' })
}


async function create(req, res) {
    console.log("SEE THIS:",req.body)
    await Flight.create(req.body)
    res.redirect('/flights')
}

