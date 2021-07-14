const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('client/'));

const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');

const vgmUrl = 'https://activebot.ru/c/z1NLjNvWR';

let tableData;

got(vgmUrl).then(response => {
	const $ = cheerio.load(response.body);
	tableData = cheerio.html($("body > div.container-fluid.public-contest > div.table-responsive-lg.text-center"));
}).catch(err => {
	console.dir(err);
});

app.get('/getdata/', (req, res) => {
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