import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import UserModel    from './userModel';
import relationship from "mongoose-relationship";



var AccountSchema = new Schema({
  title: {
    type: String,
    default: 'No title'
  },
  // logo: String,
  user: {type: Schema.ObjectId, ref: 'User', childPath:"accounts"},
  order: {type: Schema.ObjectId, ref: 'Order', childPath:"product"},
  likes: [{type: Schema.ObjectId, ref: 'User', childPath:"liked"}],
  price: Number,
  is_bound_to_phone: Boolean,
  is_with_email: Boolean,
  acc_id: Number,
  statistic: {
    win_rate: Number,
    free_xp: Number,
    gold: Number,
    battles: Number
  },
  socials: Array,
  tanks: Array,
  description: {
    type: String,
    default: 'No description'
  },
  updated: {
    type: Date,
    default: Date.now
  },
  // accType: {type: Number, default: 0},

});

AccountSchema.plugin(relationship, { relationshipPathName:['user','order', 'likes'] });

export default mongoose.model('Account', AccountSchema);
