import data from '../db.json' assert {type: 'json'}

// console.log(data)

const productElement = document.querySelector('#product')

let _content = ""

data.forEach(function(item) {
    _content = _content + /*html*/`
    <div>
        <img src="https://picsum.photos/200/300" alt="">
        <p>GIAO SIÊU TỐC 2H</p>
        <p>${item.name}</p>
        <p>Đã bán 1000+</p>
        <p>${item.price}</p>
    </div>
    `
})

productElement.innerHTML = _content