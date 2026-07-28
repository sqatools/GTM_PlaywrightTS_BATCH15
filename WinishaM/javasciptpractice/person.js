//Check whether a person can enter a movie (age >= 18 and has a ticket).
function canEnterMovie(age, hasTicket) {
    return age >= 18 && hasTicket;
}
console.log(canEnterMovie(20, true)); // true
console.log(canEnterMovie(17, true)); // false
console.log(canEnterMovie(20, false)); // false


// Check whether a username is "admin".
function isAdmin(username) {
    return username === "admin";
}
console.log(isAdmin("admin")); // true
console.log(isAdmin("user")); // false

//Check whether a user is logged in
function isUserLoggedIn(isLoggedIn) {
    return isLoggedIn;
}
console.log(isUserLoggedIn(true)); // true
console.log(isUserLoggedIn(false)); // false


//Check whether an email contains "@".
function isValidEmail(email) {
    return email.includes("@");
}
console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("userexample.com")); // false
