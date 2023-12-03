import { test } from "@playwright/test";

test("selecting rating 3 out of 5", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByText("You selected 3 out of 5").click();
});

test("changing selection from 2 to 3 out of 5", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByText("You selected 3 out of 5").click();
});

test("show alert when user doesn't make a selection", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  page.on("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Submit" }).click();
});
