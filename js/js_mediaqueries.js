$(function() {
    const mql = window.matchMedia("(max-width: 700px)");
    function handlerForMediaQueries(x) {
        if (x.matches) { // If media query matches
            makeStepNumsSlider();
        } else {
            removeStepNumsSlider();
        }
    }
    function changeBg(color, elem) {
        elem.style.backgroundColor = color;
    }

    const body = document.body;

    function makeStepNumsSlider() {
        const stepsNums = document.querySelector("#stepsNums");

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

        console.log(stepsNums);

    }

    function removeStepNumsSlider() {
        const stepsNums = document.querySelector("#stepsNums");

        stepsNums.classList.remove("carousel");
        stepsNums.classList.remove("slide");
        stepsNums.classList.remove("carousel-multi-item");
        stepsNums.dataset.ride = '';

        const stepsInner = stepsNums.querySelector('.carousel-inner');
        stepsInner.classList.remove("carousel-inner");
        stepsInner.classList.add("steps-inner");

        let stepsList = stepsNums.querySelectorAll(".carousel-item");
        stepsList.forEach(function (step) {
            step.classList.remove("carousel-item");
            step.classList.add("item");
            step.classList.add("w-25");
        });

        stepsList.querySelector('.active').classList.remove('active');

        console.log(stepsNums);

    }


    console.log(mql);
    handlerForMediaQueries(mql);
    mql.addEventListener("change", () => {
        handlerForMediaQueries(mql);
    });
});