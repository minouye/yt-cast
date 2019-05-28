
require('dotenv').config({path: __dirname + '/.env'})

const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		headless: true
		// devtools: true
 	});

 	const page = await browser.newPage();
 	await page.goto('https://overcast.fm/login');

	// Login
	await page.type('#email', process.env.OVERCAST_EMAIL);
	await page.type('#password', process.env.OVERCAST_PASSWORD);
  await page.click('button[type="submit"]');
	
	await page.goto('https://overcast.fm/uploads');

	const input = await page.$('input[type=file]')
	let episodeCount = (await page.$$('.usernewepisode')).length
	console.log('episode count:', episodeCount)
 	
 	await (resp = input.uploadFile(process.argv[2]))
	await page.waitForFunction(episodeCount => {
 		return document.getElementsByClassName('usernewepisode').length > episodeCount
 	}, { timeout: 360000 }, episodeCount)

	await browser.close()

})();