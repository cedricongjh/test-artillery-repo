module.exports = { helloFlow, loadHomePage };
 
async function helloFlow(page) {
  await page.goto("http://localhost:8080/devServerLogin?nextUrl=http://localhost:4200/web/instructor/home");

  await page.click('#email');
  await page.evaluate(() => {
    const emailInput = document.querySelector('#email');
    emailInput.value = 'ins@gmail.com'; // Set the input value to a login email
  });

  // Click the login button
  await page.click('#btn-login');

  await page.goto("http://localhost:4200/web/instructor/home");
  await page.pause();
}

async function loadHomePage(page) {
    await page.goto("https://teammatesv4.appspot.com/web/front/home")
}
