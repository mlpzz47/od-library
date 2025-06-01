const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const addBookBtn = document.getElementById("add-book");
const nameInput = document.getElementById("book-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const nameError = document.getElementById("name-error");
const authorError = document.getElementById("author-error");
const pagesError = document.getElementById("pages-error");
const libraryTable = document.getElementById("library");
const libraryBody = document.getElementById("library-body");
const libraryHeader = document.getElementById("library-head");


const tableDisplay = ()=> {
    if (libraryBody.children.length === 0) {
        libraryTable.style.display = "none";
    } else {
        libraryTable.style.display = "block";
    }
}

tableDisplay();

openModalBtn.addEventListener("click", ()=>{
    modal.style.display = 'flex';
})

closeModalBtn.addEventListener("click", ()=>{
    modal.style.display = 'none';
})

const library = [];

function Book(name,author,pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

addBookBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let book = new Book(nameInput.value.trim(),authorInput.value.trim(),pagesInput.value.trim());
    if (!nameInput.checkValidity()) {
        nameError.removeAttribute("hidden");
    } else {
        nameError.hidden = true;
    }
    if (!authorInput.checkValidity()) {
        authorError.removeAttribute("hidden");
    } else {
        authorError.hidden = true;
    }
    if (!pagesInput.checkValidity()) {
        pagesError.removeAttribute("hidden");
    } else {
        pagesError.hidden = true;
    } 
    if (nameInput.checkValidity() && pagesInput.checkValidity() && authorInput.checkValidity()){
        book.id = crypto.randomUUID();
        library.push(book);
        libraryBody.innerHTML += `
            <tr class="table-row" id="${book.id}">
                <td class="library__data" id="book">${book.name}</td>
                <td class="library__data" id="author">${book.author}</td>
                <td class="library__data" id="pages">${book.pages}</td>
                <td class="library__data" id="read">
                <label class="read-label">
                    <input type="checkbox" class="read-input" name="read-status">
                    <span class="have-read">Read</span> / <span class="not-read">Not Read</span>
                    </label>
                </td>
                <td class="library__data" id="${book.id}">
                    <button type="button" class="remove-button">Remove Book</button>
                </td>
            </tr>
        `
        modal.style.display = 'none';
        nameInput.value = ""; authorInput.value = ""; pagesInput.value = "";
        tableDisplay();
        // let row = document.getElementById(book.id);
        // let removeRowBtn = document.querySelector(".remove-button");
        // removeRowBtn.addEventListener("click", ()=>{
        //     if (removeRowBtn.id === row.id) {
        //         libraryBody.removeChild(row);
        //         library.remove(book)
        //         tableDisplay();
        //     } else {
        //         return;
        //     }
        // })
    }
})