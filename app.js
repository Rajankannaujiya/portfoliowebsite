const mongoose = require("mongoose")
const express = require("express");
const ejs = require("ejs");
const bodyParser= require("body-parser");
const userRouter = require("./src/routes/main.js");
const path = require("path");

const detailSchema = require("./src/models/detail.js");
const sliderSchema = require("./src/models/slider.js");
const contactSchema = require("./src/models/contact");

const serveStatic = require('serve-static');
// const { includes } = require("mongoose/lib/helpers/query/validOps.js");
// import routes from (".main")
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended:true}));
app.use(serveStatic(path.join(__dirname)));

app.use('', userRouter);


// db connection
mongoose.connect("mongodb://127.0.0.1:27017/website_dynamic");

// mongoose detailSchema
// detailSchema.create({
//     brandName: "Rajan Kannaujiya",
//     brandIconUrl: "https://source.unsplash.com/random/?coding,hacking",
//     links: [{
//         label: "Home",
//         url: "/"
//     },
//     {
//         label: "About",
//         url: "/about"
//     },
//     {
//         label:"Contact",
//         url:"/contact"

//     }]

// })


// creating the slidder schema
// sliderSchema.create(
//     {
//     title:"STUDENT AT",
//     subTitle:"HEMWATI NANDAN BAHUGUNA GARHWAL UNIVERSITY UTTARAKHAND",
//     imageUrl:"/images/hnbgu1.jpg",

// },
//     {
//     title:"PERSUING BACHELOR OF TECHNOLOGY",
//     subTitle:"COMPUTER SCIENCE AND ENGINEERING",
//     imageUrl:"/images/hnbgu1.jpg",

// },
//     {
//     title:"FULL STACK DEVELOPER",
//     subTitle:"HTML CSS Java script Node js Express js Mongodb ejs API",
//     imageUrl:"/images/hnbgu1.jpg",

// }
// );





// template engine setting
app.set("views", "views");
app.set("view engine", "ejs");


app.listen(port, () => {
    console.log(`server started at port ${port}`)
})