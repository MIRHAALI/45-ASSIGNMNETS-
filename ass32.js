var current_users = ['alice', 'bob', 'charlie', 'david', 'emma'];
var new_users = ['charlie', 'frank', 'emma', 'grace', 'HENRY'];
// Convert all usernames to lowercase for case insensitive comparison
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase(); // Convert new username to lowercase
    if (current_users_lower.includes(new_user_lower)) {
        console.log("Sorry, ".concat(new_user, " is not available. Please enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
}
