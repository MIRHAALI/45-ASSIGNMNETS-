// Print in lowercase
console.log("John Doe".toLowerCase());
// Print in uppercase
console.log("John Doe".toUpperCase());
// Print in title case
console.log("John Doe".replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
