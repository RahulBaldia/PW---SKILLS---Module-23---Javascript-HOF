// Sample list of items with prices in USD
const storeItems = {
    "item1": 10, // USD
    "item2": 20, // USD
    "item3": 30, // USD
    "item4": 40  // USD
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Convert the prices from USD to INR
const convertedItems = Object.keys(storeItems).map(item => {
    return {
        [item]: storeItems[item] * exchangeRate
    };
});

// Convert the array of objects back to a single object
const itemsInRupees = Object.assign({}, ...convertedItems);

// Output the original and converted items
console.log("Original Prices in USD:", storeItems);
console.log("Converted Prices in INR:", itemsInRupees);
