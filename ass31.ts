let usernames: string[] = ['admin', 'alice', 'bob', 'charlie', 'david', 'emma'];

// Check if the array of usernames is not empty
if (usernames.length > 0) {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array to test the empty case
usernames = [];

// Check again if the array is empty
if (usernames.length > 0) {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}
