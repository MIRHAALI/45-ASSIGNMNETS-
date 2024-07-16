let current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'emma'];
let new_users: string[] = ['charlie', 'frank', 'emma', 'grace', 'HENRY'];

// Convert all usernames to lowercase for case insensitive comparison
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase(); // Convert new username to lowercase

    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, ${new_user} is not available. Please enter a new username.`);
    } else {
        console.log(`${new_user} is available.`);
    }
}
