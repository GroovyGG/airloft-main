/**
 * Created by jyang on 2016-07-11.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articlesSchema = new Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    title: String,
    description: String,
    content: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comment'}]
});



var article = mongoose.model('article', articlesSchema);

module.exports = article;
