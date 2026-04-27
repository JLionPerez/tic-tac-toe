import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://jlionperez.github.io/tic-tac-toe/');
  await expect(page).toHaveTitle(/Tic Tac Toe/);
  await expect(page.getByText('Welcome to Tic Tac Toe!')).toBeVisible();
  await expect(page.locator('body')).toContainText('Welcome to Tic Tac Toe! Player 1 will be starting this round.');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });