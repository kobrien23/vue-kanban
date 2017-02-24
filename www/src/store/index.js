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
    cards:[],
    lists:[],
    activeLists:[],
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
        // board get methods
        getBoards() {
            console.log("in get boards in the new store")
            api.get('boards').then(res => {
                state.boards = res.data.data
            }).catch(handleError)
        },
        getBoard(id) {
            api.get('boards/' + id).then(res => {
                state.activeBoard = res.data.data
            }).catch(handleError)
        },
        createBoard(boardName) {
            console.log("In createBoard with: ", boardName)
            //construct the new board object to post.
            let obj_newBoard = {}
            obj_newBoard.name = boardName;
            obj_newBoard.user = state.user._id;
            console.info(obj_newBoard)
            api.post('boards/', obj_newBoard)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },
        removeBoard(board) {
            console.log('inside of remove board method')
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
        },
        // start of list functions/methods
        createList(id, obj) {
            api.post('lists/', obj).then(res => {
                state.activeLists.push(res.data.data)
                console.log('activelists array', state.activeLists)
            }).catch(handleError)
        },
    


//bottom of actions
    }
}