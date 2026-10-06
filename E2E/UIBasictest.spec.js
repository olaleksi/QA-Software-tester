// @ts-check


import { test, expect } from '@playwright/test';

//npx playwright test 
test('browser context test', async ({ browser}) => {
    //if you have a context, you can use it to create a newpage
    // chrome - plugins / cookies / local storage / cache
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(
      "https://rahulshettyacademy.com/loginpagePractise/",
    );
    console.log(await page.title());

    

    const nameInput = await page
      .locator("#username")
      .fill("rahulshettyacademy");
    const passwordInput = await page
      .locator("#password")
      .fill("Learning@830$3mK2");
    const signInButton = await page.locator("#signInBtn").click();
    // const errorMessage = await page.locator("[style*='block']").textContent();
    // console.log(errorMessage);
    // const result = expect(errorMessage).toContain("Incorrect");
    const cardTitles = page.locator(".card-body a");
    await cardTitles.first().waitFor();// wait for the first card to be visible
    const ecommercePage = await cardTitles.allTextContents();
    console.log(ecommercePage);
    

    
});



test('Page test', async ({page}) => {
    await page.goto("https://www.google.com/");
    // assertion 
    const title = await page.title();
   
    const result1 = await expect(page).toHaveTitle("Google")
});
