const express = require('express');
const cheerio = require('cheerio');
const got = require('got');

const app = express();
app.use('/', express.static('client/'));

const port = process.env.PORT || 3000;
const vgmUrl = process.env.URL || 'https://activebot.ru/c/dDLoZQ6wd';
const TIMEOUT = 1000;

let tableData;

setInterval(() => {
	got(vgmUrl).then(response => {
		const $ = cheerio.load(response.body);
		const tableSelector = 'body > div.container-fluid.public-contest > div.table-responsive-lg.text-center';
		const exec = cheerio.html || cheerio.default.html;
		tableData = exec($(tableSelector));
	}).catch(err => {
		console.dir(err);
	});
}, TIMEOUT);

app.get('/getdata', (req, res) => {
	if (tableData === undefined){
		res.send('error');
	}
	res.send(`
		<div class="bg" style="background: linear-gradient(45deg, #f9aa01 0%, #f7f7f7 100%);"></div>
		<div class="container-fluid public-contest">
			<div class="row header">
				<div class="logo"></div>
			</div>
			<div class="table-responsive-lg text-center">
				${tableData}
		</div>`);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});