$(function() {
   const thanksItemsList = document.querySelectorAll('.thanks-img');
   const worksList = document.querySelectorAll('.work-item');
   const template = document.querySelector('#modal-template').innerHTML;
   const  modal = createModal();

    thanksItemsList.forEach(function (item) {
       item.addEventListener('click', e => {
           let target = e.target;
           let img = target.cloneNode();
           modal.setContent(img);
           modal.open();
       }) 
    });

    worksList.forEach(function (item) {
        item.addEventListener('click', e => {
            let target = e.currentTarget;
            console.log(target);

            let div = target.cloneNode(true);
            div.classList.remove('d-none');
            div.classList.remove('clearfix');
            div.classList.remove('col-md-4');
            div.classList.remove('d-md-block');
            div.classList.add('modal--card');
            modal.setContent(div);
            modal.open();
        })
    });


    
    function createModal() {
        const  container = document.createElement('div');
        container.className = 'popup';
        container.innerHTML = template;

        const contentBlock = container.querySelector('.popup__content');

        const closeBtn = container.querySelector('.popup__close');
        closeBtn.addEventListener('click', function (e) {
            contentBlock.innerHTML = '';
            document.body.removeChild(container);
        });

        const overlay = container.querySelector('.overlay');
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay)
                closeBtn.click();
        });

        return {
            open() {
                document.body.appendChild(container);
            },
            close() {
                closeBtn.click();
            },
            setContent(content) {
                contentBlock.appendChild(content);
            }
        }
    }
});