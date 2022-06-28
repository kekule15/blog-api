const mongoose = require("mongoose");
 const BlogSchema = mongoose.Schema({
     post: {type: String},
     content: {type: String},
     comment: {type: String},
 }, {timestamps: true});

Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog