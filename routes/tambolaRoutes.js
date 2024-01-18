const express = require('express');
const tambolaController = require('../controllers/tambolaController');

const router = express.Router();

router.post('/generate-tickets', tambolaController.generateTickets);
router.post('/all-tickets', tambolaController.getAllTickets);
router.delete('/delete-ticket/:ticketId', tambolaController.deleteTicket);
router.delete('/delete-all-tickets', tambolaController.deleteAllTickets); 



module.exports = router;
