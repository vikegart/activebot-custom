const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('client/'));

app.get('/getdata/', (req, res) => {
	res.send(`
		<div class="bg" style="background: linear-gradient(45deg, #f9aa01 0%, #f7f7f7 100%);"></div>
		<div class="container-fluid public-contest">
			<div class="row header">
				<div class="logo"></div>
			</div>
			<div class="table-responsive-lg text-center">
				<div class="table">
		<i><i></i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i><i>10</i></i><i><i>A</i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i></i><i><i>B</i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i><i data-original-title="" title="">B9</i></i><i b=""><b></b></i></i><i><i>C</i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i></i><i><i>D</i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i></i><i><i>E</i><i b=""><b></b></i><i><i data-original-title="" title="">E2</i></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i></i><i><i>F</i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i></i><i><i>G</i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i></i><i><i>H</i><i><i data-original-title="" title="">H1</i></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i></i><i><i>I</i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><a href="https://vk.com/bog2404"><u style="background:url(https://sun1-22.userapi.com/s/v1/ig2/vnubptwfICWHdpR1x_AwMAgy4XYV9697sSPjrzCuCaXKSF6rsUxQ49wJY6_LXN8SMii5EzsKw0frt1-FNXh3oECo.jpg?size=50x0&amp;quality=96&amp;crop=352,156,401,401&amp;ava=1)"></u></a><i b=""><b></b></i><i b=""><b></b></i></i><i><i>J</i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i><i data-original-title="" title="">J6</i></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i><i b=""><b></b></i></i>        </div>
			</div>
		</div>`);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

// implementing Cherio parsing
const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');

const vgmUrl = 'https://activebot.ru/c/z1NLjNvWR';

got(vgmUrl).then(response => {
	const $ = cheerio.load(response.body);
	console.log($("body > div.container-fluid.public-contest > div.table-responsive-lg.text-center > div")[0].children[0]);
}).catch(err => {
	console.log(err);
});