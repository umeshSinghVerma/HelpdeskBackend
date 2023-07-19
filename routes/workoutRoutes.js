const express = require('express');
const router = express.Router();
const {allworkouts,singleworkout,postworkout} = require('../controllers/workoutController');

router.get('/',allworkouts);

router.get('/:id',singleworkout);

router.post('/',postworkout);

router.delete('/:id',(req,res)=>{
    res.json({message:"this is the delete request"});
})
router.patch('/:id',(req,res)=>{
    res.json({message:"this is the update request"});
})

module.exports = router;