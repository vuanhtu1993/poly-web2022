import data from '../../db.json' assert {type: 'json'}

const urlParams = new URLSearchParams(location.search);

const id = urlParams.get('id')

let book = data.filter(function(book) {
    return book.id == id
})

book = book[0]

const contentElement = document.querySelector('#content')

const _content = /*html*/`
    <div class="container mx-auto flex">
        <div class="w-1/4 flex-none">
            <img src="${book.images[0].base_url}">
            <div class="grid grid-cols-5 gap-3">
                ${book.images.map(function(image) {
                    return `<img src="${image.base_url}" alt="">`
                }).join('')}
            </div>
        </div>
        <div class="grow">
            <p>Tác giả</p>
            <h3>Càng Kỷ Luật, Càng Tự Do</h3>
            <p>Sao</p>
            <p>Price</p>
        </div>
    </div>
`
contentElement.innerHTML = _content