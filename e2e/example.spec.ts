import { test, expect } from "@playwright/test";

test("reer", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.only("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");


  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();
  page.getByRole("link", { name: "Get started" }).click();


  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
