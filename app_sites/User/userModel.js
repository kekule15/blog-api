const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({ 
    phoneNumber: {type: String, unique: true},
    email: {type: String},
},
{ timestamps: true ,
    versionKey: false 
},

)

const User = mongoose.model("User", UserSchema);

module.exports = User