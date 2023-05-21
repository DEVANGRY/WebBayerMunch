
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-close');

// hàm hiển thị modal mua vé (thêm class open vào modal )
function showBuyTickets(){
   modal.classList.add('open')
}

// hàm để đóng cửa sổ mua vé (gỡ bỏ class open của modal )
function hideBuyTickets(){
modal.classList.remove('open')
}

// lặp qua từng thẻ butten và nghe hàm click 
for (const buyBtn of buyBtns){
  buyBtn.addEventListener('click' , showBuyTickets )
}

//nghe hành vi click vào nút button close
modalClose.addEventListener('click', hideBuyTickets )

modal.addEventListener('click', hideBuyTickets);

//ngăn chặn hành vi nổi bọt 
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

