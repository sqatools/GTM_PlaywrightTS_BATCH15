import {test,expect} from '@playwright/test'
import { LargeNumberLike } from 'node:crypto'
test.describe("Playwright  assertion",async()=>{

    test("generic assertion : toBe",async()=>{

        const value =1

       expect(value).toBe(1)
    })

    test("generic assertion : toEqual",async()=>{

        const value1 =10
        const Value2=10

       expect(value1).toEqual(Value2)
    })

    test("generic assertion : any",async()=>{

        var val : any

        var number =10;
        console.log(number)

        var string="Harish"
        console.log(string)
        
    })


   test("Generic assertion Using constructor" ,async()=>{

    class Employee {

        firstName: string;
        lastName: string;
        phoneNumber: number;

        constructor(fname: string, lname: string, PNum: number) {
            this.firstName = fname;
            this.lastName = lname;
            this.phoneNumber = PNum;
        }

        Userdetails() {
            console.log("First Name:", this.firstName);
            console.log("Last Name:", this.lastName);
            console.log("Phone Number:", this.phoneNumber);
        }
    }

    const employedetails = new Employee("Harish", "Deshpande", 9901289091);

    employedetails.Userdetails()

    expect(employedetails).toEqual(expect.any(Employee));
})

     
     test("Verify locator elements and their status", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const userNameField = page.getByPlaceholder("Enter username")
        const status = await userNameField.isEnabled()
        expect(status).toBeTruthy()
        await expect(userNameField).not.toBeFocused()
        await expect(userNameField).toBeAttached()
        await userNameField.fill("user1@gmail.com")
        await expect(userNameField).toBeFocused()
        const GetFieldValue = await userNameField.inputValue()
        expect(GetFieldValue).toEqual("user1@gmail.com")

        const GenderRadio = page.locator("#male")
        await expect(GenderRadio).not.toBeChecked()
        await GenderRadio.check()
        await expect(GenderRadio).toBeChecked()

    })
})


