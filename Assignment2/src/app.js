import data from '../db.json' assert {type: 'json'}

// console.log(data)
const listBookElement = document.querySelector('#list-book')
let _content = ""
data.forEach(function(book) {
    _content = _content + /*html*/`
    <div>
        <img src='${book.images[0].base_url}' alt="Image">
        <p>${book.name}</p>
        <p>${book.rating_average}</p>
        <p>${book.original_price}</p>
    </div>
    `
})

listBookElement.innerHTML = _content