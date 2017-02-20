import { models } from '../config/constants'


let express = require('express')
let router = express.Router()
//need the category model
let Boards = require("../models/board.js")


router.get('/',function(req,res,next){
     res.send({
                message: "You have successfully got a board ",
            })
            next()
})

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

module.exports = router