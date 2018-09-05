var Spider = require('./lib/spider').default;

var CreateSpider = function(APIKey) {
    return new Spider();
}

exports = module.exports = {
    CreateSpider: CreateSpider
}
