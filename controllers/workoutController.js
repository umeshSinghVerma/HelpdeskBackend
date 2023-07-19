const Workout = require('../models/workoutModels');
const mongoose = require('mongoose');

const allworkouts = async (req,res)=>{
    try{
        const data = await Workout.find({}).sort({createdAt:-1})
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
const singleworkout = async (req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }
    try{
        const data = await Workout.findById(id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
const postworkout = async(req,res)=>{
    const {title,load,reps}=req.body;
    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
    
}
module.exports = {allworkouts,singleworkout,postworkout}