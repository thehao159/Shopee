// Function
function handleChangeIndex(currentIndex, newIndex, btnsClassName, parentClassName, resetTimer) {
    var btnElements = document.querySelectorAll(btnsClassName);

    if(newIndex > currentIndex) {
        document.querySelector(parentClassName).style.transform = `translateX(calc((-100% / 6) * ${newIndex})`;
    }
    else {
        document.querySelector(parentClassName).style.transform = `translateX(calc((-100% / 6) * ${newIndex})`;
    }
    btnElements[currentIndex].classList.remove('content__slider-btn--selected');
    btnElements[newIndex].classList.add('content__slider-btn--selected');
    currentIndex = newIndex;
    resetTimer();
    return currentIndex;
}

function checkLimitNext(currentIndex, btnsClassName) {
    var btnElements = document.querySelectorAll(btnsClassName);

    if(currentIndex != btnElements.length - 1) {
        return currentIndex + 1;
    }
    else {
        return 0;
    }
}

function checkLimitPre(currentIndex, btnsClassName) {
    var btnElements = document.querySelectorAll(btnsClassName);

    if(currentIndex != 0) {
        return currentIndex - 1;
    }
    else {
        return btnElements.length - 1;
    }
}