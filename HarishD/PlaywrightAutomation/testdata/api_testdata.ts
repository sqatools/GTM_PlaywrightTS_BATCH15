export const restfulapi = {

    common_url: 'https://api.restful-api.dev/objects',
    one_obJ_id: 6,

    // for post we required the headers
    Headers: {
        "content-type": "application/json"
    },

    create_request_body:
    {
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    },

    update_request_body:
    {
        "name": "Apple MacBook Pro 200",
        "data": {
            "year": 2026,
            "price": 2049.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "4TB",
            "color": "Gold"
        }
    },




}