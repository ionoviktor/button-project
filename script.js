
const buttons = document.querySelectorAll('button'),
      buttonsWrapper = document.querySelector('.buttonsWrapper')
      popUpWindow = document.querySelector('.popUpWindow'),
      popUpContent = document.querySelector('.popUpContent'),
      buttonColor = document.querySelector('.button-color');


// buttonsWrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         showMessageInWindow();
//     }
// });


function showMessageIsButtonClick() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            showPopUpWindow();
            closePopUpWindow();
        })
    })
}

function showMessageInWindow() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            popUpContent.innerHTML = `Вы нажали на ${button.className} кнопку!`
        })
    })
}

function closePopUpWindow() {
    const cross = document.querySelector('.cross');
    cross.addEventListener('click', () => {
        hidePopUpWindow();
    })
}

function showPopUpWindow() {
    popUpWindow.style.display = "flex";
}

function hidePopUpWindow() {
    popUpWindow.style.display = "none";
}


showMessageInWindow();
showMessageIsButtonClick();
