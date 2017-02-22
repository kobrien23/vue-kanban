import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId
let List = require('./list')

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    created: { type: Number, default: Date.now() },
    // Relations
    listId: { type: ObjectId, ref: models.list, required: true },
    boardId: { type: ObjectId, ref: models.board }
});




schema.post('save', function (card, next) {
    console.log('function save 1')
    if (card.boardId) {
        next()
    } else {
        var listId = card.listId
        if (listId) {
            List.findById({ _id: listId })
                .then(list => {
                    card.boardId = list.boardId
                    card.save().then(next).catch(next)
                })
        }
    }
})

schema.post('save', function (card, next) {
    console.log('function 2 is working')
    return next()
})



// emitter(e, fn){


//     listeners[e].push(fn)


// }







module.exports = mongoose.model(models.card.name, schema);