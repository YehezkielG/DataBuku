const express =  require("express");
const expressEjsLayouts =  require("express-ejs-layouts");
const morgan =  require("morgan");
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

//MIDLEWARE
app.use(expressEjsLayouts);
app.use(morgan('dev'));
app.use(express.static("public"));

// Middleware untuk parsing body request
app.use(express.json());

// File path untuk JSON
const dataFilePath = path.join(__dirname, 'Data.json');

// Fungsi untuk membaca data dari file JSON
const readData = () => {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
};

// Fungsi untuk menulis data ke file JSON
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

app.get("/databuku",(req,res)=>{
    const data = readData();
    res.json(data);
})

app.post('/databuku', (req, res) => {
    const data = readData();
    const newItem = req.body;
    data.push(newItem);
    writeData(data);
    res.status(201).json(newItem);
});


app.get("/style/tailwind",(req,res)=>{
    res.sendFile(__dirname + "/public/style/output.css");
})

app.get("/",(req,res)=>{
    res.render("index",{layout:"./",title:"BookDB - Home"});
})

app.get("/populer", async (req,res)=>{
    const data = await readData();
    res.render("populer",{layout:"layout/main",title:"BookDB - Home",databuku:data});
})


app.get("/admin",(req,res)=>{
    res.render("admin",{layout:"layout/main",title:"Dashboard admin",databuku:data});
})

app.get("/buku/:id",async (req,res)=>{
    const data = await readData().filter(buku => buku.id==req.params.id);
    let detail = data[0];
    res.render("buku",{layout:"layout/main",title:"Detail - "+detail.judul,databuku:detail});
})


app.use("/", (req, res) => {
    res.status(404);
    res.render("404",{layout:"layout/main",title:"Error - 404"})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
