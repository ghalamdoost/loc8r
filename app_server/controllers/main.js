/* Get home page */
const index = function(req, res){
    res.render('index', {title: 'Shahab-Ghalamdoost'});
};

module.exports = {
    index
};  