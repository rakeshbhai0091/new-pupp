const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

app.route('*')
  .get(async (req, res) => {
    // Handle GET request
    const targetUrl = req.query.url;
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    let cookies = [];
  if (res.header.cookie) {
    res.header.cookie.split("; ").forEach((cookie) => {
      let temp = cookie.split("=");
      cookies.push({
        name: temp[0],
        value: temp[1],
        domain: ".ahrefs.com",
      });
    });
    await page.setCookie(...cookies);
  }
  let headers;
  if (res.headers) {
    headers = res.headers;
    headersToRemove.forEach((header) => delete headers[header]);
    await page.setExtraHTTPHeaders({
      ...headers,
      origin: base,
    });
  }
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
  );
    await page.goto(targetUrl, { waitUntil: 'networkidle2' });
    const html = await page.content();
    res.send(html);
    await browser.close();
  })
  .post(async (req, res) => {
    // Handle POST request
    const targetUrl = req.body.url;
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    let cookies = [];
  if (res.header.cookie) {
    res.header.cookie.split("; ").forEach((cookie) => {
      let temp = cookie.split("=");
      cookies.push({
        name: temp[0],
        value: temp[1],
        domain: ".ahrefs.com",
      });
    });
    await page.setCookie(...cookies);
  }
  let headers;
  if (res.headers) {
    headers = res.headers;
    headersToRemove.forEach((header) => delete headers[header]);
    await page.setExtraHTTPHeaders({
      ...headers,
      origin: base,
    });
  }
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
  );
    await page.goto(targetUrl, { waitUntil: 'networkidle2' });
    const html = await page.content();
    res.send(html);
    await browser.close();
  })
  .put(async (req, res) => {
    // Handle PUT request
    // ...
  })
  .delete(async (req, res) => {
    // Handle DELETE request
    // ...
  });

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
  
