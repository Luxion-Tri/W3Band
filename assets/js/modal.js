const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const quitIcon = document.querySelector('.quit-btn')
const quitButton = document.querySelector('.close-btn')
const modalContainer = document.querySelector('.modal-container')

function ShowModal() {
    document.body.classList.add('overflow-hidden')
    modal.classList.add('open-modal')
}

function CancelModal() {
    document.body.classList.remove('overflow-hidden')
    modal.classList.remove('open-modal')
}

quitIcon.addEventListener('click', CancelModal)
quitButton.addEventListener('click', CancelModal)
modal.addEventListener('click', CancelModal)
modalContainer.addEventListener('click', function(event) {
    event.stopImmediatePropagation();
})
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', ShowModal)
}    