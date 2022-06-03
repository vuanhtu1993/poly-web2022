// Take data from database
import data from '../db.json' assert {type: 'json'}
// Check data existed
console.log(data)
// Lấy địa chỉ kho hàng cần hiện thị
const bookListElement = document.querySelector('#book-list')
let _content = ""

data.forEach(function(book) {
    _content = _content + /*html*/`
    <div>
        <img src="${book.images[0].base_url}" alt="">
        <p>Tiki now</p>
        <p>${book.name}</p>
        <p>${book.rating_average}</p>
        <p>${book.quantity_sold?.text}</p>
    </div>
    `
})

bookListElement.innerHTML = _content