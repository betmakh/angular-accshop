var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var relationship = require("mongoose-relationship");

var OrderSchema = new Schema({
  product: {type: Schema.ObjectId, ref: 'Account'},
  price: Number,
  buyer: {type: Schema.ObjectId, ref: 'User',childPath: 'ordersBuy'},
  seller: {type: Schema.ObjectId, ref: 'User', childPath: 'ordersSell'},
  title: String,
  status: {
    type: String,
    default: 'In progress'
  },
  updated: {
    type: Date,
    default: Date.now
  }
});


OrderSchema.plugin(relationship, { relationshipPathName: ['buyer','seller'] });

module.exports = mongoose.model('Order', OrderSchema);
