$(function() {
    const stepsNums = document.querySelector("#stepsNums");
    const works = document.querySelector("#works__multi-item");

    const mql = window.matchMedia("(max-width: 700px)");
    function handlerForMediaQueries(x) {
        if (x.matches) { // If media query matches
            makeStepNumsSlider();
            makeWorksSlider();
        } else {
            removeStepNumsSlider();
            removeWorksSlider();
        }
    }

    function makeStepNumsSlider() {
        stepsNums.classList.add("carousel");
        stepsNums.classList.add("slide");
        stepsNums.classList.add("carousel-multi-item");
        stepsNums.dataset.ride = 'carousel';

        const stepsInner = stepsNums.querySelector('.steps-inner');
        stepsInner.classList.add("carousel-inner");
        stepsInner.classList.remove("steps-inner");

        let stepsList = stepsNums.querySelectorAll(".item");
        stepsList.forEach(function (step) {
            step.classList.add("carousel-item");
            step.classList.remove("item");
            step.classList.remove("w-25");
        });

        stepsList[0].classList.add('active');
    }

    function removeStepNumsSlider() {
        stepsNums.classList.remove("carousel");
        stepsNums.classList.remove("slide");
        stepsNums.classList.remove("carousel-multi-item");
        stepsNums.dataset.ride = '';

        const stepsInner = stepsNums.querySelector('.carousel-inner');
        if(stepsInner) {
            stepsInner.classList.remove("carousel-inner");
            stepsInner.classList.add("steps-inner");
        }


        let stepsList = stepsNums.querySelectorAll(".carousel-item");

        if (stepsList.length > 0)  {
            stepsList.forEach(function (step) {
                step.classList.remove("carousel-item");
                step.classList.add("item");
                step.classList.add("w-25");
                if (step.classList.contains('active')) step.classList.remove('active');
            });

        }
    }

    function makeWorksSlider() {
        const workList = works.querySelectorAll('.work-item');
        let carouselItems = works.querySelectorAll('.carousel-item');
        let indicatorWrapper = works.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        createCarouselRow(workList, works, 'works__multi-item');

    }

    function removeWorksSlider() {
        const workList = works.querySelectorAll('.work-item');
        let carouselItems = works.querySelectorAll('.carousel-item');
        let indicatorWrapper = works.querySelector('.carousel-indicators');
        let indicators = indicatorWrapper.querySelectorAll('li');

        removeItems(carouselItems);
        removeItems(indicators);

        let rowList = divideArrayForRow(workList, 3);
        createCarouselRow(rowList, works, 'works__multi-item');


    }

    function createCarouselRow(list, mainWrapper, mainId) {
        const inner = mainWrapper.querySelector('.carousel-inner');
        let indicatorWrapper = mainWrapper.querySelector('.carousel-indicators');

        list.forEach(function (work, index) {
            work.classList.remove('d-none');
            let div = createCarouselItem(work);
            let indicator = createIndicator(mainId, index);

            if (index === 0) {
                div.classList.add('active');
                indicator.classList.add('active');
            }
            inner.appendChild(div);
            indicatorWrapper.appendChild(indicator);
        });
    }

    function createCarouselItem(innerHtml) {
        let div = document.createElement('div');
        div.classList.add('carousel-item');
        div.appendChild(innerHtml);
        return div
    }

    function removeItems(list) {
        list.forEach(function (item) {
            item.remove();
        });
    }

    function createIndicator(mainId, index) {
        let li = document.createElement('li');
        li.dataset.target = "#" + mainId;
        li.dataset.slideTo = index;

        return li;
    };

    function divideArrayForRow(list, slidesInRow) {
        let rowsList = [];
        for (let i=0; i<list.length; i=i+slidesInRow) {
            let row = document.createElement('div');
            row.className = 'row';
            for (let j=i; j<(i+slidesInRow); j++) {
                if (j>=list.length) break;
                row.appendChild(list[j]);
            }
            rowsList.push(row);
        }
        return rowsList;
    }

    handlerForMediaQueries(mql);
    mql.addEventListener("change", () => {
        handlerForMediaQueries(mql);
    });
});