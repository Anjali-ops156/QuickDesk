const express = require('express');
const router = express.Router();
const { createTicket, getTickets, getTicketById, updateStatus, addReply } = require('../controllers/ticketController');
router.post('/', createTicket);
router.get('/', getTickets);
router.get('/:id', getTicketById);
router.put('/:id/status', updateStatus);
router.post('/:id/reply', addReply);
module.exports = router;