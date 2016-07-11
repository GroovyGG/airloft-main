/**
 * Created by jyang on 2016-07-11.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.model('article').find({}, function(err, docs){
        res.send(docs);
    });
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    Article = mongoose.model('article');
    try {
        json = JSON.parse(req.body["article"])
    } catch (e) {
        return res.send('JSON not valid!')
    }

    var success = 0;
    var fail = 0;
    if (json.length) {
        for (var i=0; i<json.length; i++) {
            new_article = new Article(json[i]);
            new_article.save(function (err) {
                if (err) {
                    fail += 1;
                }
                else {
                    success += 1;
                }
            });
        }
    } else{
        new_article = new Article(json);
        new_article.save(function (err) {
            if (err) {
                fail += 1;
            }
            else {
                success += 1;
            }
        });
    }
    setTimeout(function(){
        res.send("inserted:" + success + " objects. " + "failed to insert:" + fail + " objects.");
    }, 1000);





});

module.exports = router;