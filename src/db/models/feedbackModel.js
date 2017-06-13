var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var relationship = require("mongoose-relationship");

var FeedbackModel = new Schema({
  user: {type: Schema.ObjectId, ref: 'User', childPath:"feedbacks"},
  order: {type: Schema.ObjectId, ref: 'Order', childPath:"product"},
  text: String,
  rating: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

FeedbackModel.plugin(relationship, { relationshipPathName: ['user', 'order'] });


module.exports = mongoose.model('Feedback', FeedbackModel);
