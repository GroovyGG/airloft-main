/**
 * Created by jyang on 2016-07-11.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
    article: {type: mongoose.Schema.Types.ObjectId, ref: 'article'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    content: String
});



var comment = mongoose.model('comment', commentsSchema);

module.exports = comment;
