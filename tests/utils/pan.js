const { read } = require('fs')


async function pan(locator, deltaX, deltaY, steps) {
  const { centerX, centerY } = await locator.evaluate((target) => {
    const bounds = target.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    return { centerX, centerY };
  });

  // Providing only clientX and clientY as the app only cares about those.
  const touches = [{
    identifier: 0,
    clientX: centerX,
    clientY: centerY,
  }];
  await locator.dispatchEvent('touchstart',
      { touches, changedTouches: touches, targetTouches: touches });

  steps = steps ?? 5;
  deltaX = deltaX ?? 0;
  deltaY = deltaY ?? 0;
  for (let i = 1; i <= steps; i++) {
    const touches = [{
      identifier: 0,
      clientX: centerX + deltaX * i / steps,
      clientY: centerY + deltaY * i / steps,
    }];
    await locator.dispatchEvent('touchmove',
        { touches, changedTouches: touches, targetTouches: touches });
  }

  await locator.dispatchEvent('touchend');
}


  async function isTouch(page) {
    return await page.evaluate(() => 'ontouchstart' in window)
  }

  async function readNum(str) {
    const match = str.match(/^[1-9]\d*/g)
    console.log(match)
    if (match) {
      return parseInt(match[0])
    }
  }
  
  module.exports = {
    isTouch,
    pan,
    readNum
  }