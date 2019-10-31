$(function() {
// menu mobile
    $('#btn_gamburg').click(function () {
        $('.menu-nav-wrap').toggleClass('active');
    });
    $('#btn_close').click(function () {
        $('.menu-nav-wrap').toggleClass('active');
    });
    $('#ic_present').click(function () {
        $('.ic_present_popup').toggleClass('active');
    });
    $('#btn_close_popup').click(function () {
        $('.ic_present_popup').toggleClass('active');
    });
    const askQuestions = document.querySelector('#askQuestions');
    const orderQuestions = document.querySelector('#orderQuestions');
    const orderQuestionsCloseBtn = document.querySelector('#orderQuestionsCloseBtn');

    askQuestions.addEventListener('click', e => {
        orderQuestions.style.display = 'block';
        orderQuestions.scrollIntoView({block: "center", behavior: "smooth"});
    });

    orderQuestionsCloseBtn.addEventListener('click', () => {
        orderQuestions.style.display = 'none';
    });

    let orderBtns = document.querySelectorAll('.cells_order-btn');
    let orderForm = document.querySelector('#orderForm');

    orderBtns.forEach(function (item) {
       item.addEventListener('click', e => {
           orderForm.scrollIntoView({block: "center", behavior: "smooth"});
       })
    });
}); 