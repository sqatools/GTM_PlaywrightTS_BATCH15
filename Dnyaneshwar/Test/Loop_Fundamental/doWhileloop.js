var m=20
do {
    console.log(m)
    m +=1
}
while(m<20)

    
   var db_user = "Admin"
var db_password = "admin123"
var ActiveStatus = true

var username = "Admin"
var password = "admin123"

var num = 3

do {
    if (db_user == username && db_password == password) {
        console.log("Login Successful")
    } else {
        console.log("Login Failed")
        ActiveStatus = false
    }

    if (ActiveStatus) {
        for (var i = 1; i<=10; i++) {
            console.log(i, "*", num, ":", i*num)
        }
    
    }
    num += 1

    if (num == 10) {
        break
    }
} while(ActiveStatus)

    



