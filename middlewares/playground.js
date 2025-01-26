const playGroundMiddleware = (req, res, next) => {
    console.log('play ground middleware called');
    return next();
}

module.exports = playGroundMiddleware;