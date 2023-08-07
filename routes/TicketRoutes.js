const express = require('express');
const router = express.Router();
const ticketController=require('../controller/TicketController')
router.post('/create',ticketController.createTicket)
module.exports=router