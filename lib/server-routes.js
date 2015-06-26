var buster = require('./buster');

module.exports = function(app,callback) {
    // load up the generated cache buster keys so
    // we can pass them through to the views
    buster.load(function(err,viewDataMixin) {
        if (err) {
            console.error('Failed to load cache-buster index, will not be able to add cache-busting hashes to resource URLs: %s',err.toString());
        }

        app.get('/*',function(req,res,next) {
            res.render('index.ect',viewDataMixin({}));
        });

        callback(null,app);
    });
};
