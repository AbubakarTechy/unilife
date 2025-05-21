//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=7000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


var isValid=false;

function checkUser(req, res, next){
    const password=req.body["password"];
    if(password== 'bkr'){
        isValid=true;
    }
    next();
}
app.use(checkUser);

app.get("/" , (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/check' , (req, res)=>{
    if(isValid){
        res.sendFile(__dirname+ '/public/secret.html');
    } else{
        // res.redirect("Shiiiiiii dalo password");
      res.send(`
        <h1>Aryyyyy password shi dalo</h1>
        `);
    }
})

app.listen(port,()=>{
    console.log(`Server is running on https://${port}`)
} )