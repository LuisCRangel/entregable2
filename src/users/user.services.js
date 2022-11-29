const userControllers = require('./user.controllers')

const getAllUsers = (req, res) => {
  const data = userControllers.findAllUsers()
  res.status(200).json(data)
};

const getUserById = (req, res) => {
    const id = req.params.id
    const data = userControllers.findUserById(id)
    if (data){
      res.status(200).json(data)
    }else{
      res.status(404).json({message: 'Invalid ID'})
    }
}

const postUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    if (first_name && last_name && email && password){
        const data = userControllers.createUser({first_name, last_name, email, password, birthday})
        res.status(201).json(data)
    }else{
      res.status(400).json({message: 'Invalid Data', fields :{first_name:'String*', last_name:'String*', email: 'String*', password: 'String*', birthday: 'YYYY/MM/DD'}})
    }
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser
}