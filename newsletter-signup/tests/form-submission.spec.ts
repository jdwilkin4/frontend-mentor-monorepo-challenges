import { test } from "@playwright/test";

test("successful email submission", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("email@company.com").click();
  await page.getByPlaceholder("email@company.com").fill("test@email.com");
  await page
    .getByRole("button", { name: "Subscribe to monthly newsletter" })
    .click();
  await page.getByRole("button", { name: "Dismiss message" }).click();
});

test("unsuccessful email submission", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("email@company.com").click();
  await page
    .getByPlaceholder("email@company.com")
    .fill("something#something.com");
  await page
    .getByRole("button", { name: "Subscribe to monthly newsletter" })
    .click();
  await page.getByText("Valid email required");
});
