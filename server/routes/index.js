const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/api/get',(req, res)=>{
    const sqlSelect = "SELECT * FROM income"
    mysqlConnection.query(sqlSelect,(err, result)=>{
        if(!err){
            res.send(result);
            
            // res.json(rows);
        }else{
            console.log(err)
        }
    })
})
router.post('/api/insert',(req, res)=>{
    const { concept, amount, date, type }= req.body;
    const sqlInsert = "INSERT INTO income (concept, amount, date, typeInput) VALUES(?,?,?,?)";
    mysqlConnection.query(sqlInsert,[concept, amount, date, type],
        (err,result)=>{
            if(!err){
                res.send("we are working!")
                console.log("Post:",result);
            // res.json(rows);
            }else{
            console.log(err);
            }
            
            
        })
})

router.delete('/api/delete/:concept',(req,res)=>{
    const concept = req.params.concept;
    const sqlDelete = "DELETE FROM income WHERE concept = ?";

    mysqlConnection.query(sqlDelete, concept,(err,result)=>{
        if(!err){
            res.send("we are working!")
            console.log("Delete: ",result);
        // res.json(rows);
        }else{
        console.log(err);
        }   
    })
})
router.put('/api/update',(req,res)=>{
    const { concept, amount, date  }= req.body;
    const sqlUpdate = "UPDATE income SET concept = ? WHERE amount = ?";

    mysqlConnection.query(sqlUpdate,[concept, amount],(err,result)=>{
        if(!err){
            
            console.log("Put:",result);
        // res.json(rows);
        }else{
        console.log(err);
        }   
    })
})

module.exports = router; 