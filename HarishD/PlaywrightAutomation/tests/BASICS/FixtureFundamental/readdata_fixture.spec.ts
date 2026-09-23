import { test } from '../../../Fixture/test_fixture.ts'

test.describe("fixture cases", () => {

    test("Fixture first test case", async ({UserData}) => {

        console.log(UserData)

    })

    test("Fixture Second test case", async ({UserData}) => {

        console.log(UserData)

    })

    test("Fixture Third test case", async ({UserData}) => {

        console.log(UserData)

    })

})