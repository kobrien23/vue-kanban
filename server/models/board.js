import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  user: {type: ObjectId, ref: models.user.name, required: true },
  description: { type: String },
  created: { type: Number, default: Date.now() },
});


module.exports = mongoose.model(models.board.name, schema);