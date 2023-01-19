pl.view.createBook = {
    setupUserInterface: function () {
        var saveButton = document.forms['Book'].commit;
        // Load all book objects
        Book.loadAll();
        // Set an event handler for the save/submit button
        saveButton.addEventListener("click",
            pl.view.createBook.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            Book.saveAll();
        });
    }
}