var modal = document.querySelector('.modal');
var iconClose = document.querySelector(".fa-solid.fa-xmark");
var btnClose = document.querySelector(".modal__footer--btn");
var btnOpen = document.querySelector(".btn__modal");

function toggleModal() {
    modal.classList.toggle("hide");
}

modal.addEventListener('click',function(e) {
    if(e.target == e.currentTarget) {
        toggleModal();
    }
});
iconClose.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
btnOpen.addEventListener('click',toggleModal);