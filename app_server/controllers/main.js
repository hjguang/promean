const index = (req, res) => {
    res.render('index', {title: 'Express'});
}

// noinspection JSAnnotator
module.exports = {
    index
};