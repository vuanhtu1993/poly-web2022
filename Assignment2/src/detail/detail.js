import data from "../../db.json" assert { type: "json" };

const params = new URLSearchParams(window.location.search)

let book = data.filter(function(book) {
    return book.id == params.get('id')
})

book = book[0]
console.log(book)
const category = book.categories.name;

const contentElement = document.querySelector('#content')

const _content = /*html*/`
    <div class="container mx-auto flex space-x-3">
        <div class="w-1/3 flex-none">
            <img id="detail-image" src="${book.images[0].base_url}">
            <div class="grid grid-cols-5 gap-3">
                
                ${book.images.map(function(image) {
                    const _image = document.createElement('img')
                    _image.src = image.base_url
                    return `${_image}`
                }).join('')}
            </div>
        </div>
        <div class="grow">
            <p>${book.authors ? book.authors[0].name : "Không xác định tác giả"}</p>
            <p>${book.original_price}</p>
            <div class="flex space-x-2 items-center">
                <p>⭐⭐⭐⭐</p>
                <p>DDanh gias</p>
                <p>Da ban</p>
            </div>
        </div>
    </div>
    <div>
        Thông tin chi tiết sp
        ${book.specifications && book.specifications[0].attributes.map(function(info) {
            return /*html*/`
                <div><span>${info.name}: ${info.value}</span></div>
            `
        })}
    </div>
    <div>
        Sản phẩm tương tự
        <div class="grid grid-cols-8 gap-3">
        ${data.filter(function(book) {
            return book.categories.name == category
        }).map(function(book) {
            return /*html*/`
                <div>
                    <img src="${book.images[0].base_url}">
                    <p>${book.name}</p>
                </div>
            `
        }).join('')}
        </div>
    </div>
`

contentElement.innerHTML = _content

const detailImageElement = document.querySelector('#detail-image')