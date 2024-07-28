let books = [];

function addBook(title,author,year){
    let book = {title,author,year};
    books.push(book);
}
function displayBooks(){
    console.log('Book Collection:');
    books.forEach(book => {
        console.log(`${book.title} by ${book.author} (${book.year})`);
    });
}

function findBook(title){
    let book = books.find(book => book.title ===title);
    if(book){
        console.log(`Found:${book.title} by ${book.author} (${book.year}`);
    }
    else{
        console.log('Book not found');
    }
}

addBook('the great gatsby','f scott',1909);
displayBooks();
findBook('tttt');