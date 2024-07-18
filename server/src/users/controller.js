const pool = require('../../db')
const queries = require('./queries')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


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

const addUser = ( async (req,res)=>{
    const {first_name,last_name,email,password,phone} = req.body;
    // console.log(req.body);

    // need to check if email already exists 
    pool.query(queries.getUserByEmail, [email], (error,results)=>{
        if (error) throw error
        if(results.rows.length){
            return res.status(400).send("Email already Exists.");
        }
    })

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    pool.query(queries.addUser, [first_name, last_name, email, hashedPassword, phone], (error,results)=>{
        if (error) throw error;
        res.status(201).send("User created succesfully");
        console.log("Created Succesfully");
        
    })
})

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    console.log('Recieved login request:', { email, password });

    try {
      const userResult = await pool.query(queries.getUserByEmail, [email]);
      if (!userResult.rows.length) {
        return res.status(400).send("Invalid credentials !");
      }
      
      
  
      const user = userResult.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Invalid credentials #");
      }
  
      const token = jwt.sign({ user_id: user.user_id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  };
  
  const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).send("Access denied. No token provided.");
    }
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(400).send("Invalid token.");
    }
  };

module.exports ={
    getUsers,
    getUserById,
    addUser,
    loginUser,
    authenticateToken
};