const puppeteer = require('puppeteer-core');
const BrowserData = require('../../../sdk/BrowserData');

const browserData = new BrowserData();

const getPage = async () => {
  const browserWSEndpoint = await browserData.browserWSEndpoint();

  const browser = await puppeteer.connect({
    browserWSEndpoint,
  });

  return await browser.newPage();
};

module.exports = async (context, workObject) => {
  const code = workObject.get('code');

  await context.messenger.send(`Tracking: ${code}`);

  const page = await getPage();

  try {
    await page.goto('https://www2.correios.com.br/sistemas/rastreamento/default.cfm');

    const objects_textarea = await page.waitForSelector('#objetos');
    await objects_textarea.focus();

    await page.keyboard.type(`${code};${code}`);
    await page.keyboard.press('Enter');

    await page.waitForSelector('.tblSroResultado', { timeout: 6000 });

    const parcel = await page.evaluate(() => {
      const tds = document.querySelectorAll('.tblSroResultado tbody tr td');

      const status_element = tds[1] || {};
      const local_element = tds[2] || {};

      return {
        status: status_element.innerText || '',
        local: local_element.innerText || '',
      };
    });

    parcel.code = code;
    await page.close();

    workObject.update(parcel);
    return parcel;
  } catch (error) {
    await page.close();
    throw error;
  }
};
