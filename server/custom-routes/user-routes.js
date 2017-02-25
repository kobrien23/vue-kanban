// need to import models to import when want to access the database

let Boards = require('../models/board')
import list from '../models/list'

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
  },

  boardLists: {
    path: '/boards/:id/lists',
    reqType: 'get',
    method(req, res, next){
      console.log("looking for boardLists")
      let action = 'Find a specific board lists'
      // list is the name of the model up top, that provided schema
      list.find({boardId: req.params.id})
        .then(lists => {
          // the 'lists' below is the actual array returned by the call
          res.send(handleResponse(action, lists))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },


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