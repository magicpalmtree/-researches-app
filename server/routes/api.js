const express = require('express');
const Finding = require('../models/finding');

const router = express.Router();

// get a list of findings from a db
router.get('/findings', function(req, res){
    Finding.find({}).then(function(findings){
        res.send(findings);
    })
});

// get a single finding
router.get('/findings/:id', function(req, res){
    Finding.findOne({_id: req.params.id}).then(function(finding){
        res.send(finding);
    })
});

// create a new finding to the db
router.post('/findings', function(req, res, next){
    Finding.create(req.body).then(function(finding){
        res.send(finding)
    }).catch(next)

});

// update a finding in the db
router.put('/findings/:id', function(req, res){
    Finding.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Finding.findOne({_id: req.params.id}).then(function(finding){
                res.send(finding);
            }
        );
    })
});

// delete a finding from the db
router.delete('/findings/:id', function(req, res){
    Finding.findByIdAndRemove({_id: req.params.id}).then(function(finding){
        res.send(finding);
    })
});

module.exports = router;