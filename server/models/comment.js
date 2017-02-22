import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	comment: { type: String },
	created: { type: Number, default: Date.now() },
	// Relations
    userId: { type: ObjectId, ref: models.user, required: true },
	cardId: { type: ObjectId, ref: models.list, required: true },
    // boardId: { type: ObjectId, ref: models.board, required: true }
});




module.exports = mongoose.model(models.comment.name, schema);