/**
 * Created by jyang on 2016-07-11.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,
    password: String,
    avatar: String,
    articles: [{type: mongoose.Schema.Types.ObjectId, ref: 'article'}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comment'}]
});


// Mongoose automatically looks for the plural version of your model name.
// Thus, for the example above, the model user is for the users collection in the database.
var user = mongoose.model('user', usersSchema);

module.exports = user;
