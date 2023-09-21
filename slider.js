const mongoose =require("mongoose");
const sliderSchema = new mongoose.Schema({
     
    title:String,
    subTitle:String,
    imageUrl:String,
    class: String
})
module.exports = mongoose.model("slider",sliderSchema);