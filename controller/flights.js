
const Flight = require('../models/flight')


module.exports = {
    index,
    new: newFlight,
    create
}


async function index(req, res) {
    
    const flights = await Flight.find({}).sort({departs: 1})
    res.render('flights/index', { flights })
}

function newFlight(req, res) {
    const newFlight = new Flight()
    const ascOrder = newFlight.departs

    console.log('NEW FLIGTH INFOR:', newFlight, 'ASCENDEING ORDER INFO:', ascOrder)
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

