
// const { request } = require("express");
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

const _renderListpage=(req,res,responseBody)=>{
    res.render('foodlist',{
        foods:responseBody
    });
};

const foodlist=(req,res)=>{
    const path='/api/foods';
    const requestOptions={
        url:apiOptions.server+path,
        method:'GET',
        json:{}
    };
    request(requestOptions, (err, response, body)=>{
        _renderListpage(req,res,body);
    });
};

const _renderDetailPage=(req,res,responseBody)=>{
    res.render('food-info',{
        currentFood: responseBody
    });
};

const foodInfo=(req,res)=>{
    const path=`/api/foods/${req.params.foodid}`;
    const requestOptions={
        url:apiOptions.server+path,
        method:"GET",
        json:{}
    };
    request(requestOptions,(err,response,body)=>{
        _renderDetailPage(req,res,body);
    });
};

module.exports = {
    foodlist,
    foodInfo
};  