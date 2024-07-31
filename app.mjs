import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import morgan from "morgan";

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
    res.send("<h1>404</h1>");
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
