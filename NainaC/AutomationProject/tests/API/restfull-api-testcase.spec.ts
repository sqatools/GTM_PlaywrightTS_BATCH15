import { test } from '../../fixture/APIfixture'
import { RestFullAPI } from '../../api/restfulapi/restfulAPIPage'
import { expect } from '@playwright/test'

test.describe("RestFullApi Test Cases", () =>{
test("Get all objects and verify", async({apiPageM}) =>{
//const restfapi = new RestFullAPI(request)
const data:any = await apiPageM.restfapi.get_all_object_details()
console.log(data)
const response = data[0]
const status = data[1]
expect(response.length).toBe(13)
expect(status).toBe(200)
})

test("Get one objects and verify", async({apiPageM}) =>{
//const restfapi = new RestFullAPI(request)
const data:any = await apiPageM.restfapi.get_one_object_details()
console.log(data)
const response = data[0]
const status = data[1]
expect(response.id).toBe("8")
expect(status).toBe(200)
})


   test("Create new object and verify", async({apiPageM}) =>{
     const response= await apiPageM.restfapi.get_new_object_details()
const responseJSON = await response.json()
 console.log(responseJSON)
const status = response.status()
expect(status).toBe(200)
   })
})