const puppeteer = require('puppeteer')
try {
  (async () => {
    const browser = await puppeteer.launch({ headless: false})
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.google.com')
    await page.screenshot({path: 'amazon.png'})
    //await browser.close()
    console.log('See screenshzzodt')
  })()
} catch (err) {
  console.error(err)
}