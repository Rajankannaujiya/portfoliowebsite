const mongoose= require("mongoose");
const contactSchema=mongoose.Schema(
    {
        email:String,
        phone:String,
        company:String,
        query:String
    }
);
module.exports=mongoose.model("queries",contactSchema);