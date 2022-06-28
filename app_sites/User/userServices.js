
const User = require("./userModel");




async function createPost(phoneNumber, email) {
    return User.create({phoneNumber: phoneNumber, email:email})
}
async function findAll(){
    return User.find()
}
async function findOne(id){
    return User.findById(id)
}
async function findByIdAndUpdate(email){
    return User.updateOne({email: email})
}

async function findOneAndDelete(id){
    return User.findByIdAndDelete({user_id:id})
}

module.exports = { createPost, findAll, findOne,  findByIdAndUpdate, findOneAndDelete}