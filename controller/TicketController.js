const TicketModel = require("../models/TicketModel");
const eventSchema = require("../models/EventModel");
const genMail = require("../util/emailGen");
const userSchema = require("../models/UserModel");

module.exports.createTicket = async (req, res) => {
    try {
      console.log(req.body);
      var event = await eventSchema.findById(req.body.event);
  
      console.log("event.....................",event);
      let responseSent = false; // Flag to track if response is sent
  
      if (req.body.seat.seatType == "premium") {
        console.log("........",event.price.premium.seat);
        if (event.price.premium.seat <= req.body.seat.person) {
          // Ticket creation and seat update logic for premium seats
          // ...
        } else {
          responseSent = true; // Set flag to true before sending response
          res.status(200).json({ message: "Sorry no tickets available" });
        }
      } else if (req.body.seat.seatType == "nonPremium") {
        if (event.price.nonPremium.seat <=req.body.seat.person) {
          // Ticket creation and seat update logic for nonPremium seats
          // ...
        } else {
          responseSent = true; // Set flag to true before sending response
          res.status(200).json({ message: "Sorry no tickets available" });
        }
      }
  
      // If the response is already sent in the above blocks, skip the following code
      if (!responseSent) {
        // TicketModel.create logic and other operations
        // ...
        res.status(200).json({
          message: "ticket generated successfully",
          ticketId: data._id,
        });
      }
    } catch (error) {
      res.status(400).json({ message: "ticket not generated successfully", ticketId: error });
    }
  };
  