# minimal-front-end-app
Minimal front-end App combining html and javascrpt, based on an article extracted from the book "Building Front-End Web Apps with Plain JavaScript"(https://www.codeproject.com/Articles/753724/JavaScript-Front-End-Web-App-Tutorial-Part).

Basic app to manage information about books. The Book object will be: Book = {isbn: String, title: String, year: Integer}; and the app will support the basic
data management operations (Create/Read/Update/Delete; CRUD).

The app will be built under the Model-View-Controller paradigm (MVC) and it's folder will be structured as follows:

minmal-app
  src
    ctrl
    model
    view
  index.html
  
For a MVC review, refer to: https://www.codecademy.com/article/mvc

The starting page of the app will load the Book.js model class and offer a menu for choosing of a CRUD operation, each performed by a corresponding page.
