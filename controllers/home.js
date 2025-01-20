const homePage  = (req, res) => {
    res.render('index', {title: 'Welcom to home page'});
}


module.exports = {homePage}