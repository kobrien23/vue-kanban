import { models } from '../config/constants'


let express = require('express')
let router = express.Router()
//need the category model
let Boards = require("../models/board.js")



router.post('/board', (req, res) => {

    Boards.create(req.body)
        .then(board => {
            res.send({
                message: "You have successfully created a board ",
                data: board
            })
        })
        .catch(error => {
            res.send({
                error: error
            })
        })


})