// Renders public/resume.pdf and public/og.png from a running preview server.
import { chromium } from 'playwright';

const base = process.env.BASE_URL ?? 'http://localhost:4321';
const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(`${base}/resume`, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.pdf({ path: 'public/resume.pdf', format: 'Letter', printBackground: false, preferCSSPageSize: true });

await page.emulateMedia({ media: 'screen', colorScheme: 'dark' });
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto(`${base}/og`, { waitUntil: 'networkidle' });
await page.screenshot({ path: 'public/og.png' });

await browser.close();
