const getUsers = "select * from users";
const getUserById = "select * from users where user_id = $1";
const getUserByEmail = "select * from users where email = $1";
const addUser = "insert into users (first_name, last_name, email, password, phone) values ($1, $2, $3, $4, $5)";
const deleteUserById = "delete from users u where u.id = $1";
const deleteUserByEmail ="delete from users u where u.email = $1";
// const updateUserById = "update users set user_name =  $1 , user_phone= $2 ,user_age= $3 ,user_gender= $4 where id= $5"


module.exports = { 
    getUsers,
    getUserById,
    getUserByEmail,
    addUser,
    deleteUserById,
    deleteUserByEmail,
    // updateUserById
}