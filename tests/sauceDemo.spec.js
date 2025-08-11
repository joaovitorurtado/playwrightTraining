const { test, expect } = require('@playwright/test');

test.describe('Fluxo de compra', () => {

  test('Login válido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Login inválido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'user_falso');
    await page.fill('#password', 'senha_errada');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('Adicionar produto ao carrinho', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('button[name="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });

  test('Finalizar compra', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('button[name="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');
    await page.fill('#first-name', 'João');
    await page.fill('#last-name', 'Teste');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    await page.click('#finish');

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

});