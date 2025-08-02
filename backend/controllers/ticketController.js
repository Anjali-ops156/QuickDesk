const Ticket = require('../models/Ticket');

const createTicket = async (req, res) => {
  const ticket = await Ticket.create({ ...req.body, createdBy: req.user.id });
  res.status(201).json(ticket);
};

const getTickets = async (req, res) => {
  const filters = { ...req.query };
  const role = req.user.role;

  if (role === 'user') filters.createdBy = req.user.id;
  if (filters.status) filters.status = filters.status.toLowerCase();

  const tickets = await Ticket.find(filters).populate('createdBy assignedTo');
  res.json(tickets);
};

const getTicketById = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id).populate('createdBy assignedTo');
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
  res.json(ticket);
};

const updateStatus = async (req, res) => {
  const { status } = req.body;
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(ticket);
};

const addReply = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  ticket.replies.push({
    sender: req.user.id,
    message: req.body.message,
    timestamp: new Date(),
  });
  await ticket.save();
  res.json(ticket);
};

module.exports = { createTicket, getTickets, getTicketById, updateStatus, addReply };
