const ticketSchema = new mongoose.Schema({
  subject: String,
  description: String,
  category: String,
  status: { type: String, enum: ['open', 'in_progress', 'resolved', 'closed'], default: 'open' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attachments: [String],
  replies: [{ sender: String, message: String, timestamp: Date }],
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
}, { timestamps: true });
module.exports = mongoose.model('Ticket', ticketSchema);