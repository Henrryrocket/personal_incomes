const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/',(req, res)=>{
    const sqlInsert = "INSERT INTO income (concept, amount, date, typeInput) VALUES('ropa','1500','2021/11/05','INCOME'); "
    mysqlConnection.query(sqlInsert,(err, result)=>{
        if(!err){
            res.send("we are working!")
            // res.json(rows);
        }else{
            console.log(err)
        }
    })
})

module.exports = router; 