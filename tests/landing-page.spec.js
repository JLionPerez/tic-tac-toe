import { test, expect } from '@playwright/test';

test('page has title', async ({ page }) => {
    await page.goto('https://jlionperez.github.io/tic-tac-toe/');
    await expect(page).toHaveTitle(/Tic Tac Toe/);
});

test('welcome player 1 appears first', async ({ page }) => {
    await page.goto('https://jlionperez.github.io/tic-tac-toe/');
    await expect(page.getByText('Welcome to Tic Tac Toe!')).toBeVisible();
    await expect(page.locator('body')).toContainText('Welcome to Tic Tac Toe! Player 1 will be starting this round.');
})

test('all 9 cells in game board rendered and empty', async ({ page }) => {
    await page.goto('https://jlionperez.github.io/tic-tac-toe/');
    await expect(page.locator('.gameboard')).toBeVisible();
    
    const cells = page.locator('.cell')
    await expect(cells).toHaveCount(9)
    for (let i = 0; i < cells.count(); i++) {
        await expect(cells.nth(i)).toHaveText('');
    }
});