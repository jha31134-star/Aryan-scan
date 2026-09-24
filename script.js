// SEARCH BOOKS

function searchBooks() {

    const searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const books =
        document.querySelectorAll(".book-card");

    const noResults =
        document.getElementById("noResults");

    let found = false;

    books.forEach(function(book) {

        const title =
            book.dataset.title.toLowerCase();

        const category =
            book.dataset.category.toLowerCase();

        if (
            title.includes(searchText) ||
            category.includes(searchText)
        ) {

            book.style.display = "block";

            found = true;

        } else {

            book.style.display = "none";
        }

    });

    if (found) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
}


// CATEGORY FILTER

function filterCategory(category) {

    const books =
        document.querySelectorAll(".book-card");

    const noResults =
        document.getElementById("noResults");

    let found = false;

    books.forEach(function(book) {

        if (book.dataset.category === category) {

            book.style.display = "block";

            found = true;

        } else {

            book.style.display = "none";
        }

    });

    noResults.style.display =
        found ? "none" : "block";
}


// SHOW ALL

function showAll() {

    const books =
        document.querySelectorAll(".book-card");

    books.forEach(function(book) {

        book.style.display = "block";

    });

    document.getElementById("noResults")
        .style.display = "none";

    document.getElementById("searchInput")
        .value = "";
}


// SCROLL

function scrollToBooks() {

    document.querySelector(".section")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// READ BUTTON

function readBook(bookName) {

    alert(
        "You selected: " +
        bookName +
        "\n\nReader page will open here."
    );
function readBook(BookName) {
    window.location.href =
        "chapter.html?book=" + encodeURIComponent(BookName);
}
}

