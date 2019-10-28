$(function() {
// menu mobile

    $(".phone_num").mask('(0999) 99-99-99');
    console.log($(".phone_num"));

    $('#btn_gamburg').click(function () {
        $('.menu-nav-wrap').show('slow');
    });
    $('#btn_close').click(function () {
        $('.menu-nav-wrap').hide();
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
    })
}); 