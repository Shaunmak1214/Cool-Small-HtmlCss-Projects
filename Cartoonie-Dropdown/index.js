const dropdown = document.querySelector('.dropdown')
const conDropdown = document.querySelector('.con-dropdown')
const items = document.querySelectorAll('.dropdown-menu button')
conDropdown.addEventListener('click', (evt) => {
    dropdown.classList.toggle('open')
})

document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.dropdown')) {
        dropdown.classList.remove('open')
    }
})

items.forEach((item) => {
    item.addEventListener('click', (evt) => {
        conDropdown.querySelector('.text').innerHTML = ''
        conDropdown.querySelector('.text').appendChild(evt.target.cloneNode(true))
        items.forEach((_item) => {
            _item.classList.remove('selected')
        })
        evt.target.classList.add('selected')
    })
})