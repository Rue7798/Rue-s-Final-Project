const express = require('express');
const router = express.Router();
const courserepository = require('../database/courserepository')
const app = express();


router.get("/getallcourses", async (req, res) => {
    try {
        const x = await courserepository.getAllCourses()
        res.send(x);
    } catch (e) {
        console.log(e);
    }
});
module.exports = router;