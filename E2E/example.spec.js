// @ts-check
import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
const { chromium } = require("playwright"); // Import the browser runner

async function run() {
  // 1. Launch the BROWSER (Opens the actual Chrome application)
  const browser = await chromium.launch({ headless: false });

  // 2. Create a CONTEXT (Opens a brand-new, clean Incognito Session)
  const context = await browser.newContext();

  // 3. Open a PAGE (Opens a single tab inside that Incognito Session)
  const page = await context.newPage();

  // Now you can instruct the page to do things!
  await page.goto("https://playwright.dev/");

  // Close the browser when finished
  await browser.close();
}

run();

