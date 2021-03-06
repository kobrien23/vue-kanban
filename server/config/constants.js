const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
 board: {
    name: 'Board',
    endpoint: 'boards'
  },
  list: {
    name: 'List',
    endpoint: 'lists'
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  card: {
    name: 'Card',
    endpoint: 'cards'
  },
  comment: {
    name: 'Comment',
    endpoint: 'comments'
  }
}


export  {
  actions,
  models
}