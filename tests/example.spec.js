// @ts-check
import { test, expect,devices } from '@playwright/test';
const { pan, readNum, isTouch } = require('./utils/pan')



// test.beforeEach(async ({ page }) => {
//   await page.goto('/index.html')
// })

test.use({...devices['Pixel 7'] })


test(`pan gesture to move the loading ui`, async ({ page }) => {
    await page.goto('http://localhost:3211/');

    await page.evaluate((ev) => {

      // Get the map element.
      // Initialize the pull-to-refresh functionality.
      // if ('ontouchstart' in window && 'ontouchmove' in window && 'ontouchend' in window) {
      //   console.log('success: touch events are supported');
      // }


    });
      const met = page.locator('#content');

      // for (let i = 0; i < 5; i++)
      
      await pan(met,0,-400,5);

      await pan(met,0,-10,5);

    // const metJs = await page.evaluate(() => document.querySelector('#content'));
    

    // await expect(met).toHaveScreenshot();
  });
  






