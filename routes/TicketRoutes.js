const express = require('express');
const router = express.Router();
const ticketController=require('../controller/TicketController')
router.post('/createTicket',ticketController.createTicket)
module.exports=router