const {Pool} = require("pg")

const pool = new Pool({
    user: "marcus",
    password: "password",
    host: "localhost",  
    port: 5432,
    database: "devops_task_manager"
});



module.exports = pool;