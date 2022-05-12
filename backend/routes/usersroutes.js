const userrepository = require('../database/userrepository')
const express = require('express');
const router = express.Router();
const cors = require('cors')
const app = express();

router.post("/auth/login", async (req, res) => {
    
      
    try {
        
        let x = await userrepository.signIn(req,res);
         res.send(x)
    } catch (error) {
        console.log(error);
    }

});


//----------------------------------------

router.get("/users/:userName", async (req, res) => {
    try {
        const x = await userrepository.CheckAccountByUserName(req.params.userName);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});

router.post("/users/AddOne", async (req, res) => {
    console.log(req.body);
    try {
        const x = await userrepository.AddNewUser(req.body);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});
router.delete("/:userName", async (req, res) => {
    try {
        const x = await myRepository.deletAccountByuserName(req.params.userName);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});

module.exports = router;