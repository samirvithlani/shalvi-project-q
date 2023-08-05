const TicketModel = require('../models/TicketModel');
const eventSchema = require('../models/EventModel');
const genMail=require('../util/emailGen')
const userSchema=require('../models/UserModel')

module.exports.createTicket = (async (req, res) => {
    try {
        console.log(req.body)
        var event = await eventSchema.findById(req.body.event)
        console.log(event)
        if (req.body.seat.seatType == 'premium') {
            if (event.price.premium.seat >= req.body.seat.person) {
                console.log("----", event.price.premium.seat)
                var seatsLeft = event.price.premium.seat - req.body.seat.person
                console.log(seatsLeft)
                var updatedSeat = {
                    premium: {
                        seat: seatsLeft,
                        price: event.price.premium.price
                    },
                    nonPremium: {
                        seat: event.price.nonPremium.seat,
                        price: event.price.nonPremium.price
                    }
                }
            }
            else {
                res.status(200).json({ message: "Sorry no tickets available" })
            }
        }
        else if (req.body.seat.seatType == 'nonPremium') {
            if (event.price.nonPremium.seat >= req.body.seat.person) {
                var seatsLeft = event.price.nonPremium.seat - req.body.seat.person
                var updatedSeat = {
                    premium: {
                        seat: event.price.premium.seat,
                        price: event.price.premium.price
                    },
                    nonPremium: {
                        seat: seatsLeft,
                        price: event.price.nonPremium.price
                    }
                }
            }
            else {
                res.status(200).json({ message: "Sorry no tickets available" })
            }
        }
        TicketModel.create(req.body).then(async (data) => {
            console.log("updated", updatedSeat)
            await eventSchema.updateOne({ _id: req.body.event }, { price: updatedSeat }).exec()
            console.log(seatsLeft)
            var users=await userSchema.findById(req.body.user).exec()
            genMail(await users.email,data._id)
            res.status(200).json({ message: "ticket generated sucessfully", ticketId: data._id })
        }).catch((error) => {
            res.status(400).json({ message: "ticket not generated sucessfully", ticketId: error })
        })

    }
    catch (error) {

    }
})