let input = "Hello, World!";


function reverseString(str) {
    return str.split("").reverse().join("");
}


setTimeout(function() {
    let reversedString = reverseString(input);
    
   
    console.log(reversedString);
}, 2000); 
