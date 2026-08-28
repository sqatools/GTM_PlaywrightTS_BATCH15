import {test} from '@playwright/test'

test ('shopping site',async({page})=>{
await page.goto("https://automationexercise.com/")
await page.getByRole('link', { name: 'Home' })

await page.getByRole('link', { name: 'Women' })
await page.getByText('Add to cart').nth(1)
})