const openModal = document.getElementById("open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const addBookBtn = document.getElementById("add-book");
const nameValue = document.getElementById("book-input");
const authorValue = document.getElementById("author-input");
const pagesValue = document.getElementById("pages-input");


openModal.addEventListener("click", ()=>{
    modal.style.display = 'flex';
})

closeModalBtn.addEventListener("click", ()=>{
    modal.style.display = 'none';
})

addBookBtn.addEventListener("click", ()=>{
    
})

const library = [];
