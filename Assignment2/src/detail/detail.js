import data from '../../db.json' assert {type: 'json'}

const params = new URLSearchParams(window.location.search);
const id = params.get('id')

const book = data.filter(book => book.id == id)
console.log(book)