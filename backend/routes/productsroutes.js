const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const productrepository = require('../database/productsrepository');


router.get("/getallproducts", async (req, res) => {
    try {
        const x = await productrepository.getAllproducts()
        res.send(x);
    } catch (e) {
        console.log(e);
    }
});
module.exports = router;
