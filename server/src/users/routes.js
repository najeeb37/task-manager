const {Router} = require("express");
const controller = require('./controller')

const router = Router();

router.get("/",(req, res) =>{
    res.send("user Home Page");
});

router.get("/users", controller.getUsers);
router.get("/users/:id", controller.getUserById);
router.post("/adduser", controller.addUser)

module.exports = router;