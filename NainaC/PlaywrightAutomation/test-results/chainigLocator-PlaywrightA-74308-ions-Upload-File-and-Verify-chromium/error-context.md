# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chainigLocator\PlaywrightActions\playwrights_Actions.spec.ts >> Playwright Actions >> Upload File and Verify
- Location: NainaC\PlaywrightAutomation\tests\chainigLocator\PlaywrightActions\playwrights_Actions.spec.ts:115:10

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://sqatools.in/automation-practice-page/", waiting until "load"

```

# Test source

```ts
  17  |             const PasswordField = page.getByPlaceholder("Enter password")
  18  |             await PasswordField.fill(PasswordVal)
  19  |             const EnteredPass = await PasswordField.inputValue()
  20  |             console.log(EnteredPass)
  21  |             expect(EnteredPass).toEqual(PasswordVal)
  22  |         });
  23  | 
  24  |         await test.step("Enter date and time", async()=> {
  25  |             // date formate should be YYYY-MM-DD
  26  |             await page.locator("#datePicker").fill("2026-04-30")
  27  |             // time should be in 24 hr clock
  28  |             await page.locator("#timePicker").fill("18:15")
  29  |             // dateTimePicker
  30  |             await page.locator("#dateTimePicker").fill("2026-03-02T18:15")
  31  |         });
  32  |     });
  33  | 
  34  | 
  35  |     test("Select checkbox and radio buttons", async({page})=> {
  36  |         await page.goto("https://sqatools.in/automation-practice-page/")
  37  |         const radiobt =  page.getByRole("radio", {name: "Male", exact: true})
  38  |         await expect(radiobt).not.toBeChecked();
  39  |         await radiobt.check();
  40  |         await expect(radiobt).toBeChecked();
  41  | 
  42  |         const checkboxbtn = page.getByRole("checkbox", {name: 'Selenium'})
  43  |         await expect(checkboxbtn).not.toBeChecked()
  44  |         await checkboxbtn.check()
  45  |         await expect(checkboxbtn).toBeChecked()
  46  |      });
  47  | 
  48  |      test("Handle dropdown value", async({page})=> {
  49  |         await page.goto("https://sqatools.in/automation-practice-page/")
  50  |         const countryDD =  page.locator("#country")
  51  |         await countryDD.scrollIntoViewIfNeeded()
  52  |         await countryDD.selectOption("usa")
  53  | 
  54  |         await page.waitForTimeout(3_000)
  55  | 
  56  |         await countryDD.selectOption({"label": "Australia"})
  57  | 
  58  |         // select multipl values from drop down.
  59  |         const skilldd = page.locator("#skills")
  60  |         await skilldd.selectOption(['Python', 'Selenium', 'Playwright'])
  61  |      })
  62  | 
  63  |     test("Click action to perform operations", async({page})=> {
  64  |        await page.setViewportSize({width: 2000, height: 1080})
  65  |        await page.goto("https://sqatools.in/automation-practice-page/")
  66  |        const btnElement = page.getByRole("button", {name: "Normal Button"})
  67  |        await btnElement.scrollIntoViewIfNeeded()
  68  |        await test.step.skip("Right click operation", async()=> {
  69  |             await btnElement.click({'button': 'right'})
  70  |             await page.waitForTimeout(5_000)
  71  |             await page.keyboard.press("ArrowDown")
  72  |             await page.keyboard.press("ArrowDown")
  73  |             await page.keyboard.press("Enter")
  74  |        });
  75  | 
  76  |        await test.step("control click operation", async()=> {
  77  |             const DummyPageLink = page.getByRole("link", {name: "Dummy Page"}).first()
  78  |             await  DummyPageLink.scrollIntoViewIfNeeded()
  79  |             await DummyPageLink.click({ modifiers: ['Control'] })
  80  |             await page.waitForTimeout(5_000)
  81  |        });
  82  | 
  83  |        await test.step("Hover operation", async()=> {
  84  |             const TutorialLink = page.getByRole("link", {name: "Tutorials"}).first();
  85  |             await TutorialLink.hover();
  86  |        });
  87  |     });
  88  | 
  89  | 
  90  |     test("Keybord Action operations", async({page})=> {
  91  |        await page.setViewportSize({width: 2000, height: 1080})
  92  |        await page.goto("https://sqatools.in/automation-practice-page/")
  93  |        const UsernameField = await page.getByPlaceholder("Enter username")
  94  |        await UsernameField.fill("user1@gmail.com")
  95  |        await UsernameField.press("Control+A")
  96  |        await UsernameField.press("Control+C")
  97  |        const Address = page.locator("#address")
  98  |        await Address.clear()
  99  |        await Address.press("Control+V")
  100 | 
  101 |      });
  102 | 
  103 | 
  104 |     test("Drag and Drop Operation", async({page})=> {
  105 |         await page.setViewportSize({width: 2000, height: 1080})
  106 |         await page.goto("https://sqatools.in/automation-practice-page/")
  107 |         const sourceElement = page.locator("#drag1")
  108 |         const targetElement = page.locator(".drop")
  109 |         await sourceElement.scrollIntoViewIfNeeded()
  110 |         await sourceElement.dragTo(targetElement)
  111 |         expect(targetElement).toContainText("Drag Me")
  112 |      });
  113 | 
  114 | 
  115 |      test("Upload File and Verify", async({page})=> {
  116 |         await page.setViewportSize({width: 2000, height: 1080})
> 117 |         await page.goto("https://sqatools.in/automation-practice-page/")
      |                    ^ Error: page.goto: Target page, context or browser has been closed
  118 |         const FileUpload = page.locator("#fileUpload")
  119 |         await FileUpload.scrollIntoViewIfNeeded()
  120 |         await FileUpload.setInputFiles("D:\assignment word")
  121 | 
  122 | 
  123 |      })
  124 | });
```