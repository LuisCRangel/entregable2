const userDB = [];

let id = 1;

const findAllUsers = () => {
  return userDB;
};

const findUserById = (id) => {
  const user = userDB.find((item) => item.id == id);
  return user;
};

const createUser = (obj) => {
  const newUser = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday || 'Unknown'
  };
  userDB.push(newUser);
  return newUser;
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
};