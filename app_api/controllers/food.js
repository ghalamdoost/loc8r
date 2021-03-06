const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const getFoods =function(req,res){
    Food.find().exec(function(err, fooddata){
        if(err){
            res.status(404).json(err);
            return;
        }
        res.status(200).json(fooddata);
    });
};

const createFood =function(req,res){
    Food.create({
        name:req.body.name,
        type:req.body.type
    }, (err, fooddata)=>{
        if(err){
            res.status(404).json(err);
        }else{
            res.status(200).json(fooddata);
        }        
    });
};

const getSingleFood =function(req,res){
    Food.findById(req.params.foodid).exec((err, fooddata)=>{
        if(!fooddata){
            return res.status(404).json({"Message":"Food not found"});
        }else if(err){
            return res.status(404).json(err);
        }
        res.status(200).json(fooddata);
    });
};

const updateFood =function(req,res){
    if(!req.params.foodid){
        res.status(404).json({"Message":"Not found, foodid is required"});
        return;
    }
    Food.findById(req.params.foodid).exec((err, fooddata)=>{
        if(!fooddata){
            res.status(404).json({"Message":"foodid not found"});
            return;
        }else if(err){
            res.status(400).json(err);
            return;
        }
        fooddata.name=req.body.name;
        fooddata.type=req.body.type;
        fooddata.save((err, fooddata)=>{
            if(err){
                res.status(404).json(err);
            }else{
                res.status(200).json(fooddata);
            }
        });
    });
};

const deleteFood =function(req,res){
    const foodid=req.params.foodid;

    if(foodid){
        Food.findByIdAndRemove(foodid).exec((err, fooddata)=>{
            if(err){
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);
        });
    }else{
        res.status(404).json({"Message": "No foodid"});
    }
};


module.exports={
    getFoods,
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
}
