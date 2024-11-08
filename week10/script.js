let jokesPromise = fetch("https://official-joke-api.appspot.com/jokes/random");

// Fetch returns a promise, which represents the eventual receipt of a Response from the API.
// Promise allows the program to continue running without freezing while we wait for the response.

jokesPromise.then(function(response) {
    // This code will be called AFTER the response
    console.log(response);

    // Return the promise from response.json()
    return response.json();
}).then(function(responseAsObject) {
    // responseAsObject now holds the parsed JSON object
    console.log(responseAsObject);
});
