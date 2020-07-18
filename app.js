const express = require("express");
const app = express();
const SerialPort = require("serialport");
const serial = new SerialPort("/dev/ttyUSB0", { baudRate: 9600 });
const parser = serial.pipe(new SerialPort.parsers.Readline());

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/values", (req, res) => {
    serial.write(req.body.join(''));
    res.end();
});

app.listen("8080");

serial.on("open", () => {
    console.log("serial open");
});
