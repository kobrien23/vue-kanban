//This is the new_store-- in the store folder 

import axios from 'axios'

let api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 3000,
    withCredentials: true
})
// api.post('http://localhost:3000/api/login', {
//     email: 'jake1@boisecodeworks.com',
//     password: 'testing123'
// })

//the store is like a service.
//this service will be talking to the api.
//this has the methods for get borard, create bord, delete board etc.

let state = {
    user: {},
    boards: [],
    activeBoard: {},
    error: {}
}

let handleError = (err) => {
    state.error = err
}


export default {
    //ALL data lives in the state.  
    state,
    //actions is an object with a bunch of methods.
    //actions are responsible for managing all async requests.
    //if it is an async request it is here.
    //add board, edit board, delete task methods go here.
    //in the .then you update the state.
    actions: {

        getBoards() {
            console.log("in get boards in the new store")
            api.get('boards').then(res => {
                state.boards = res.data.data
            }).catch(handleError)
        },
        getBoard(id) {
            api.get('boards/' + id).then(res => {
                state.board = res.data.data
            }).catch(handleError)
        },
        createBoard(board) {
            api.post('boards/', board)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },
        removeBoard(board) {
            api.delete('boards/' + board._id)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },
        initAuth: function () {
            console.info("initAuth inside new store triggered.")
            //   axios.get('/authenticate').then(function(res){
            api.get('authenticate').then(function (res) {

                console.log("This is res: ",res)

                state.user = res.data.data


            }).catch(function (error) {
                console.log("in catch.")
                // router.push('/login/')


            })
        }
    }
}