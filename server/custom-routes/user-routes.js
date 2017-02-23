let Boards = require('../models/board')

export default {
  userBoards: {
    path: '/userboard',
    reqType: 'get',
    method(req, res, next){
      console.log("here!")
      let action = 'Find User Boards'
      Boards.find({creator: req.session.uid})
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }  
  }






}

function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }