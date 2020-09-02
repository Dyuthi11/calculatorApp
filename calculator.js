const express = require("express");
const bodyParser = require("body-parser");
const { text } = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//*******************************Normal Calculator

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Result is " + result);
});

//*******************************BMI Calculator

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var ht = parseFloat(req.body.height);
    var wt = parseFloat(req.body.weight);
    var result = wt / Math.pow(ht, 2);
    res.send("Your BMI is:" + result);
});

app.listen(3000, function() {
    console.log("server start ayithu kane");
});
