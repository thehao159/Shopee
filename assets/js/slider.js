var currentIndex = 0;
var btnElements = document.querySelectorAll('.slider__left-btn');

var changeTimer = setInterval(checkLimitNext, 5000);

// Event Listener
btnElements.forEach(function(element, index) {
    element.addEventListener('click', function() {
        if(index != currentIndex) {
            changeIndex(index);
        }
    })
})

document.querySelector('.slider__left-arrow--pre').addEventListener('click', checkLimitPre);

document.querySelector('.slider__left-arrow--next').addEventListener('click', checkLimitNext);

// Function
function checkLimitNext() {
    if(currentIndex != btnElements.length - 1) {
        changeIndex(currentIndex + 1);
    }
    else {
        changeIndex(0);
    }
}

function checkLimitPre() {
    if(currentIndex != 0) {
        changeIndex(currentIndex - 1);
    }
    else {
        changeIndex(btnElements.length - 1);
    }
}

function changeIndex(newIndex) {
    if(newIndex > currentIndex) {
        document.querySelector('.slider__left').style.transform = `translateX(calc((-100% / 6) * ${newIndex})`;
    }
    else {
        document.querySelector('.slider__left').style.transform = `translateX(calc((-100% / 6) * ${newIndex})`;
    }
    btnElements[currentIndex].classList.remove('slider__left-btn--selected');
    btnElements[newIndex].classList.add('slider__left-btn--selected');
    currentIndex = newIndex;
    clearInterval(changeTimer);
    changeTimer = setInterval(checkLimitNext, 5000);
}