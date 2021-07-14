const app = require("express")();
const http = require("http").Server(app);
const path = require('path');

const port = process.env.PORT || 3000;

const voicesArr = [];

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.get("/voices", function (req, res) {
	res.send(voicesArr);
});
app.get('/index.js', function (req, res) {
	res.sendFile((path.join(__dirname, '../client/index.js')));
});