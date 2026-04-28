import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://jlionperez.github.io/tic-tac-toe/');
})

test('page has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Tic Tac Toe/);
});

test('page has message board', async ({ page }) => {
    await expect(page.locator('.message-board')).toBeVisible();
})

test('welcome player 1 appears first', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Welcome to Tic Tac Toe! Player 1 will be starting this round.');
});

test('all 9 cells in game board rendered and empty', async ({ page }) => {
    await expect(page.locator('.gameboard')).toBeVisible();
    
    const cells = page.locator('.cell')
    await expect(cells).toHaveCount(9)

    const count  = await cells.count()
    for (let i = 0; i < count; i++) {
        await expect(cells.nth(i)).toHaveText('');
    }   
});

test('page has reset button', async ({ page }) => {
    await expect(page.locator('#reset_btn')).toBeVisible();
})