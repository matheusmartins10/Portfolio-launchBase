const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.cards')

cards.forEach(card => {
    card.addEventListener('click', ()=>{
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src=`https://www.youtube.com/embed/2G_mWfG0DZE`
    })
})

 document.querySelector('.close-modal').addEventListener('click', ()=>{
     modalOverlay.classList.remove('active')
     modalOverlay.querySelector("iframe").src = ""
 })