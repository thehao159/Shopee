// Function
function handleChangeIndex(currentIndex, newIndex, btnsClassName, parentClassName, resetTimer) {
    var btnElements = document.querySelectorAll(btnsClassName);

    if(newIndex > currentIndex) {
        document.querySelector(parentClassName).style.transform = `translateX(calc((-100% / 6) * ${newIndex})`;
    }
    else {
        document.querySelector(parentClassName).style.transform = `translateX(calc((-100% / 6) * ${newIndex})`;
    }
    document.querySelector(parentClassName).style.transition = `transform 0.5s ease`;
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

function handleMoveSLider(range, currentIndex, sliderClassName, btnsClassName) {
    var btnElements = document.querySelectorAll(btnsClassName);

    if(currentIndex === 0 && range < 0) return;
    if(currentIndex === btnElements.length - 1 && range >= 0) return;
    document.querySelector(sliderClassName).style.transform = `translateX(calc((-100% / 6) * ${currentIndex} - ${range}px)`;
    document.querySelector(sliderClassName).style.transition = `transform 0.01s ease`;
}

function handleGestureSlider(currentIndex, btnsClassName) {
    if (touchendX < touchStartX) {
        return checkLimitNext(currentIndex, btnsClassName);
    } else if (touchendX > touchStartX) {
        return checkLimitPre(currentIndex, btnsClassName);
    }
}