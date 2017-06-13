import mongoose  from 'mongoose';

mongoose.connect('mongodb://admin:admin@ds041563.mongolab.com:41563/accshop'); // connect to our database

export default mongoose;
