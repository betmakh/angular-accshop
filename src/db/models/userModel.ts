import mongoose from 'mongoose';
import relationship from "mongoose-relationship";
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    avatar: String,
    email: String,
    is_email_confirmed: {
      type: Boolean,
      default: false
    },
  	accounts: [{type: Schema.ObjectId, ref: 'Account'}],
  	feedbacks: [{type: Schema.ObjectId, ref: 'Feedback'}],
  	ordersBuy: [{type: Schema.ObjectId, ref: 'Order'}],
    ordersSell: [{type: Schema.ObjectId, ref: 'Order'}],
  	liked: [{type: Schema.ObjectId, ref: 'Account'}],
    rating: {
    	type: Number,
    	default: 0
    },
    password: String
});

export default mongoose.model('User', UserSchema);