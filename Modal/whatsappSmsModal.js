const mongoose = require("mongoose");

const smsSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

const smsModal = mongoose.model("whatsappmessage", smsSchema);

module.exports = smsModal;
