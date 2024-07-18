const pool = require('../../db')
const queries = require('./queries')
const bcrypt = require('bcryptjs');


const getUsers = (req,res) => {

    pool.query(queries.getUsers, (error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUserById =((req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    })
})

const addUser = ((req,res)=>{
    const {first_name,last_name,email,password,phone} = req.body;
    // console.log(req.body);

    // need to check if email already exists 
    pool.query(queries.checkEmailExists, [email], (error,results)=>{
        if (error) throw error
        if(results.rows.length){
            res.send("Email already Exists.");
        }
    })

    const hashedPassword = bcrypt.hash(password, 10);

    pool.query(queries.addUser, [first_name, last_name, email, hashedPassword, phone], (error,results)=>{
        if (error) throw error;
        res.status(201).send("User created succesfully");
        console.log("Created Succesfully");
        
    })
})

module.exports ={
    getUsers,
    getUserById,
    addUser
};