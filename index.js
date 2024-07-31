const express =  require("express");
const expressEjsLayouts =  require("express-ejs-layouts");
const bodyParser =  require("body-parser");
const morgan =  require("morgan");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

//MIDLEWARE
app.use(expressEjsLayouts);
app.use(morgan('dev'));
app.use(express.static("public"));
// app.use(bodyParser);


app.get("/",(req,res)=>{
    res.render("index",{layout:"./",title:"BookDB - Home"});
})

app.get("/buku",(req,res)=>{
    res.render("buku",{layout:"layout/main",title:"BookDB - Home"});
})

app.use("/", (req, res) => {
    res.status(404);
    res.render("404",{layout:"layout/main",title:"Error - 404"})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

module.exports = app