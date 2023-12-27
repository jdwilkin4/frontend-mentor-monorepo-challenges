import { test } from "@playwright/test";

test("calculates tip per person for bill of $142.55 with 15% tip", async ({
  page,
}) => {
  await page.goto("http://localhost:1234/");
  await page.getByLabel("Bill").click();
  await page.getByLabel("Bill").fill("142.55");
  await page.getByRole("button", { name: "15%" }).click();
  await page.getByLabel("Number of People").click();
  await page.getByLabel("Number of People").fill("5");
  await page.locator("#tip-amount").click();
  await page.getByText("4.28").click();
});

test("calculates total amount per person for bill of $142.55 with 15% tip", async ({
  page,
}) => {
  await page.goto("http://localhost:1234/");
  await page.getByLabel("Bill").click();
  await page.getByLabel("Bill").fill("142.55");
  await page.getByRole("button", { name: "15%" }).click();
  await page.getByLabel("Number of People").click();
  await page.getByLabel("Number of People").fill("5");
  await page.locator("#tip-amount").click();
  await page.getByText("4.28").click();
  await page.locator("#total").click();
  await page.getByText("32.79").click();
});

test("shows error message if number of people is 0", async ({ page }) => {
  await page.goto("http://localhost:1234/");
  await page.getByLabel("Bill").click();
  await page.getByLabel("Bill").fill("142.55");
  await page.getByRole("button", { name: "15%" }).click();
  await page.getByLabel("Number of People").click();
  await page.getByLabel("Number of People").fill("0");
  await page.getByText("Number of People Can't be zero").click();
});

test("resets all values when reset button is clicked", async ({ page }) => {
  await page.getByLabel("Bill").click();
  await page.getByLabel("Bill").fill("142.55");
  await page.getByRole("button", { name: "15%" }).click();
  await page.getByLabel("Number of People").click();
  await page.getByLabel("Number of People").fill("5");
  await page.locator("#tip-amount").click();
  await page.getByText("4.28").click();
  await page.locator("#total").click();
  await page.getByText("32.79").click();
  await page.getByRole("button", { name: "Reset" }).click();
  await page.getByLabel("Bill").click();
  await page.getByLabel("Bill").fill("0");
  await page.getByText("$ 0.00").first().click();
  await page.getByText("$ 0.00").nth(1).click();
});
