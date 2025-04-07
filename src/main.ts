import { chromium } from "playwright";
const fs = require('fs').promises;
async function run() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  await page.screenshot({ path: "example.png" });

  const content = await page.content();
  await fs.writeFile('page-content.html', content);
  
  await browser.close();
}
run();
