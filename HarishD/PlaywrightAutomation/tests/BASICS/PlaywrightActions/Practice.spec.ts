import { expect, test } from "@playwright/test";

test.describe("Login to the HRM browser", () => {

    test("Login and add user", async ({ page }) => {

        await test.step("Login to OrangeHRM", async () => {
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            await page.waitForLoadState("domcontentloaded");
            const username = "admin";
            const password = "admin123";

            const usernameField = page.getByPlaceholder("Username");
            await usernameField.fill(username);

            const enteredUsername = await usernameField.inputValue();
            console.log("Entered value in username field is: " + enteredUsername);
            expect(enteredUsername).toEqual(username);

            const passwordField = page.getByPlaceholder("Password");
            await passwordField.fill(password);
            const enteredPassword = await passwordField.inputValue();
            console.log("Entered value in password field is: " + enteredPassword);
            expect(enteredPassword).toEqual(password);

            // Click Login
            await page.getByRole("button", { name: "Login" }).click();

            // Verify login successful
            const logo = page.getByAltText("client brand banner");
            await expect(logo).toBeVisible();
            console.log("Login successful - OrangeHRM logo is displayed");
        });

        await test.step("Click on Admin", async () => {
            const admin = page.locator(".oxd-main-menu-item--name").filter({ hasText: "Admin" });
            await admin.click();
        });

        await test.step("Click Add User", async () => {
            const addUser = page.getByRole("button", { name: "Add" });
            await expect(addUser).toBeVisible();
            await addUser.click();

            await page.waitForTimeout(3_000)

            // Select the user role from the dropdown
            const Userrole = page.locator(".oxd-form-row").filter({ hasText: "User Role" })
            await Userrole.locator(".oxd-select-text").first().click()
            await page.getByRole("option", { name: "Admin" }).click();

            //INPUT: Employee Name


            const employee = page.getByPlaceholder("Type for hints...");
            await employee.fill("As");

            const suggestion = page.locator(".oxd-autocomplete-option").filter({ hasText: "Thomas Kutty Benny" });
            await suggestion.click();

            //  await page.getByPlaceholder("Type for hints...").fill("hari")
            // const EmployeeName = page.locator('.oxd-form-row').filter({ hasText: "Employee Name" }).getByPlaceholder("Type for hints...")
            // await EmployeeName.fill("A8DCo 4Ys 010Z")
            // //await page.getByText('A8DCo 4Ys 010z', { exact: true }).click();
            // await page.waitForTimeout(3_000)

            //status 
            const status = page.locator('.oxd-form-row').filter({ hasText: "Status" })
            await status.locator('.oxd-select-text').nth(1).click()
            await page.getByRole('option', { name: 'Enabled' }).click()

            //UserName
            const UserName = page.locator('.oxd-form-row').filter({ hasText: "Username" })
            await UserName.locator('.oxd-input').fill("abcd123")

            // Password and confirm password inputs are both password type fields in this form.
            const passwordInputs = page.locator('input[type="password"]');
            await passwordInputs.nth(0).fill("User@123");
            await passwordInputs.nth(1).fill("User@123");

            //save 
            await page.getByRole('button', { name: ' Save ' }).click()



        });

    });
}); 