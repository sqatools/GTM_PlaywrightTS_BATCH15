export const RestFullAPI = {
    common_url : "https://api.restful-api.dev/objects",
    one_obj_id : 8,
    Headers : {
"content-type": 'appication/json'
    },

    create_object_request_body : {
            "name": "Apple MacBook Pro 150",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }

},
update_object_request_body:   
{
  name: "Apple MacBook Pro 16",
  data: {
    year: 2026,
    price: 2049.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "4 TB",
    colour : "gold"
          }
        },
 patch_request_body: 
   {
                "name": "Apple MacBook Pro 250",
   }
}
                      