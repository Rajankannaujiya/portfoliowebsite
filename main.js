const express = require("express")

const router = express.Router();
const detailSchema = require("../models/detail");
const sliderSchema = require("../models/slider");
const contactSchema = require("../models/contact");


router.get("/", async (req, res) => {
   const details = await detailSchema.findOne({ "_id": "6502cd70ae54456d9e6c7255" });


   // sending to views
   res.render("index.ejs", { details: details });

})

// about page rendering
router.get("/about", async (req, res) => {

   const details = await detailSchema.findOne({ "_id": "6502cd70ae54456d9e6c7255" });
   const slider = await sliderSchema.find({});

   res.render("about.ejs", {
      details: details,
      slider: slider
   });
})

// contact page rendering
router.get("/contact", async (req, res) => {

   const details = await detailSchema.findOne({ "_id": "6502cd70ae54456d9e6c7255" });

   res.render("contact.ejs",{ details: details,});
})

   // const slider = await sliderSchema.find({});
 
router.post("/process_contact", async (req, res) => {
   //save the data to db

   try {
      const data1 = await contactSchema.create(req.body);
      console.log(data1);
      res.send("your form have been submitted");
   }
   catch {
      console.error();
      res.send("form didn't submitted please try again"); 
   
   
      
      // const slider = await sliderSchema.find({});

   }
});


module.exports = router;
