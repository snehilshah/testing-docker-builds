import puppeteer from "puppeteer";

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  await page.screenshot({ path: "example.png" });
  await browser.close();
}
run();
