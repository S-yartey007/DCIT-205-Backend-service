const express = require('express');
const studentEntry = require('../models/student')

const router = express.Router();router

router.get('/entries',(req,res) => {
    studentEntry.find().sort({createdAt: -1})
                .then((result) => {
                    res.render('index', {title:'All entries', entries: result})
                })
                .catch((err) => {
                    console.log(err)
                })
})

router.post('/entries', (req,res) => {
    const student = new studentEntry(req.body)

    student.save()
            .then((result) => {
                res.redirect('/entries');
            })
            .catch((err) => {
                console.log(err)
            })
})

router.get('/entries/:id', (req,res) => {
    const id = req.params.id;
    studentEntry.findById(id)
                .then((result) => {
                    
                res.render('details', {student: result, title: "Entry details"}) 
                })
                .catch((err) => {
                    console.log(err)
                })
})
router.get('/createEntry', (req,res) => {
    res.render('create',{title:'NewEntry'});
})

router.delete('/entries/:id', (req,res) => {
    const id = req.params.id;
    
   studentEntry.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect: '/entries'})
        })
        .catch((err) => {
            console.log(err)
        })  
})


module.exports = router;