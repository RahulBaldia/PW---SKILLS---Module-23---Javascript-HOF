let books = [
    { title: "Book One", author: "John Smith", year: 2008 },
    { title: "Book Two", author: "Jane Doe", year: 2012 },
    { title: "Book Three", author: "Emily Johnson", year: 2015 },
    { title: "Book Four", author: "Michael Brown", year: 2007 },
    { title: "Book Five", author: "Sarah Davis", year: 2020 }
];


function capitalizeAuthorName(name) {
    return name.split(' ')
               .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
               .join(' ');
}


let filteredBooks = books
    .filter(book => book.year >= 2010) 
    .map(book => ({
        title: book.title,
        author: capitalizeAuthorName(book.author), 
        year: book.year
    }));


console.log(filteredBooks);
