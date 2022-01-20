
const buttons = document.querySelector('.buttons');
const popUpWindow = document.querySelector('.popUpWindow');



function showMessageIsButtonClick() {
    buttons.addEventListener('click', (event) => {
        console.log(event);
        showPopUpWindow();
        showMessageInWindow();
    })
}


function showMessageInWindow() {
    const popUpContent = document.querySelector('.popUpContent')

    
    // let buttonClass = buttons.target.classList[0];
    // console.log(`Вы нажали на ${buttonClass} кнопку.`);
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
closePopUpWindow();
showMessageIsButtonClick();