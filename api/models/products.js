const mongoose = require('mongoose');

const productSchema = mongoose.Schema( { 
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email : {type : String , require : true},
    price: { type: Number, required: true },
    address: {type : String , required : true},
    gender : {type : String , required : true},
    sharing : {type : Number , required : true},
    amenities : {type : Array , required : true},
    roomImage: { type: String, required: true }
 } );

 module.exports = mongoose.model('Product', productSchema);