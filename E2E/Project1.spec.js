// @ts-check
import { test, expect } from '@playwright/test';

test("ecommerce page test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");

  const emailInput = page.locator("#userEmail");
  const passwordInput = page.locator("#userPassword");

  await emailInput.fill("olaleksi4231@gmail.com");
  await passwordInput.pressSequentially("J@Wm97V#EWkWata");
  await page.locator("[value='Login']").click();
  
  
  const cardTitles =  page.locator(".card-body b");
  await cardTitles.first().waitFor();// wait for the first card to be visible
  const allTitles = await page.locator(".card-body b").allTextContents();
  console.log(allTitles);
});



test.only('Radio 7 select button test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const emailInput = page.locator("#username");
    const passwordInput = page.locator("#password");
    const selectInput = page.locator('select.form-control');
    const radioInput = page.locator("[value='user']");
    const alertDialogBox = page.locator("#okayBtn");
    
    
    await emailInput.fill('rahulshettyacademy');
    await passwordInput.fill("Learning@830$3mK2");
    await selectInput.selectOption('teach');
    await radioInput.click();
    await alertDialogBox.click();
    await page.pause();




})