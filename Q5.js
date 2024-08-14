function isValidURL(url) {
  
    const regex = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+(\.[a-zA-Z]+)+$/;

    // Test if the URL matches the regex
    if (regex.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is not valid.");
    }
}

// Example usage
isValidURL("https://example.com");
isValidURL("http://example.org");
isValidURL("ftp://invalid-url.com");  
isValidURL("https://invalid-url");  
