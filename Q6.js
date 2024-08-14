function isValidLinkedInURL(url) {
    
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

    
    if (regex.test(url)) {
        console.log("The LinkedIn profile URL is valid.");
    } else {
        console.log("The LinkedIn profile URL is not valid.");
    }
}

isValidLinkedInURL("https://www.linkedin.com/in/john_doe");
isValidLinkedInURL("https://www.linkedin.com/in/jane-doe123");
isValidLinkedInURL("https://www.linkedin.com/in/12345");
isValidLinkedInURL("https://www.linkedin.com/in/j");  
isValidLinkedInURL("https://www.linkedin.com/in/john_doe_john_doe_john_doe");  
