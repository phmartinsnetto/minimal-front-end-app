function Book( slots) {
    this.isbn = slots.isbn;
    this.title = slots.title;
    this.year = slots.year;
}

// Collection of all books
Book.instances = {};

// Using Local Storage API to store book data.
// Local Storage only allows for string values,
// so all data there will be in JSON format.
// Function for deserialization: JSON.parse
Book.loadAll = function () {
    var i = 0;
    var key = "";
    var keys = [];
    var bookTableString = "";
    var bookTable = {};
    try {
        if (localStorage["bookTable"]) {
            bookTableString = localStorage["bookTable"];
        }
    } catch (e) {
        alert("Error when reading from Local Storage\n" + e);
    }
    if (bookTableString) {
        bookTable = JSON.parse(bookTableString);
        keys = Object.keys(bookTable);
        console.log(keys.length + " books loaded.");
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            Book.instances[key] = Book.convertRow2Obj(bookTable[key]);
        }
    }
}

// Saving all Book instances
// Function for serialization: JSON.stringify
Book.saveAll = function () {
    var bookTableString = "";
    var error = false;
    var nmrOrBooks = Object.keys(Book.instances).length;
    try {
        bookTableString = JSON.stringify(Book.instances);
        localStorage["bookTable"] = bookTableString;
    } catch (e) {
        alert("Error when writing to Local Storage\n" + e);
        error = true;
    }
    if (!error) console.log(nmrOfBooks + " books saved.");
}

// Creating a new Book instance and addin to collection
Book.add = function (slots) {
    var book = new Book(slots);
    Book.instances[slots.isbn] = book;
    console.log("Book " + slots.isbn + " created!");
}

// Book updating
Book.update = function (slots) {
    var book = Book.instances[slots.isbn];
    var year = parseInt(slots.year);
    if (book.title !== slots.title) {book.title = slots.title;}
    if (book.year !== year) {book.year = year;}
    console.log("Book " + slots.isbn + " modified!");
}

// Deleting a book instance
Book.destroy = function (isbn) {
    if (Book.instances[isbn]) {
        console.log("Book " + isbn + " deleted");
        delete Book.instances[isbn];
    } else {
        console.log("There is no book with ISBN " + isbn + " in the database!");
    }
}

// Creating test data
Book.createTestData = function () {
    Book.instances["006251587X"] = new Book({isbn:"006251587X", title:"Weaving the Web", year:2000});
    Book.instances["0465026567"] = new Book({isbn:"0465026567", title:"Gödel, Escher, Bach", year:1999});
    Book.instances["0465030793"] = new Book({isbn:"0465030793", title:"I Am A Strange Loop", year:2008});
    Book.saveAll();
}

// Clearing all data
Book.clearData = function () {
    if (confirm("Do you really want to delete all book data?")) {
        localStorage["bookTable"] = "{}";
    }
}