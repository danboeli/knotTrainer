const express = require('express');
const router = express.Router();
const Knot = require('../models/Knot');

//Middleware
// router.use('/', (req, res, next)=>{
//     console.log('We are on posts');
//     next(); //allows rest of get request as defined in app.get is also executed afterwards.
// });

//Async GET
router.get('/', async (req, res)=>{
    try {
        const knots = await Knot.find();
        res.status(200).json(knots);
    } catch(err) {
        res.status(400).json({message: err});
    }
});


//Random GET
router.get('/random', async (req, res)=>{
    try {
        const knotCount = await Knot.countDocuments();
        const randomNumber = Math.floor(Math.random() * knotCount);
        const knot = await Knot.findOne().skip(randomNumber);
        res.status(200).json(knot);
    } catch(err) {
        res.status(400).json({message: err});
    }
});


//Specific GET
router.get('/:knotID', async (req, res)=>{ //http://localhost:3000/posts/specific
    try {
        const knot = await Knot.findById(req.params.knotID);
        if (knot == null) return res.status(400).send('Knot with specified id does not exist');
        res.send('Here is your knot challange:  ' + knot);
    } catch(err) {
        res.status(400).json({message: err});
    }
    
});

//Specific DELETE
router.delete('/:knotID', async (req, res)=>{ //http://localhost:3000/posts/specific
    try {
        const knot = await Knot.findByIdAndRemove(req.params.knotID);
        if (knot == null) return res.status(400).send('Knot with specified id does not exist');
        res.send('This post was deleted:  ' + knot);
    } catch(err) {
        res.status(400).json({message: err});
    }
    
});

//DELETE ALL
router.delete('/', async (req, res)=>{ //http://localhost:3000/posts/specific
    try {
        const knot = await Knot.remove();
        if (knot == null) return res.status(400).send('Batch deletion went wrong.');
        res.send('All knots deleted.');
    } catch(err) {
        res.status(400).json({message: err});
    }
    
});

//async call POST
router.post('/create', async (req, res)=>{ //http://localhost:3000/posts/specific
    const knot = new Knot({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link
    });
    try {
        const savedKnot = await knot.save();
        res.status(200).json(savedKnot);
    } catch(err) {
        res.status(400).json({message: err});
    }
});

module.exports = router; 