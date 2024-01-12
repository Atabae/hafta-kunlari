const elHeader = document.querySelector('.header');
const elWrapper = document.querySelector('.wrapper');
const elInput1 = document.querySelector('.input_1');
const elBtn1 = document.querySelector('.btn_1');
const elWrapper2 = document.querySelector('.wrapper_2');
const elInput2 = document.querySelector('.input_2');


// elHeader.style.display = 'flex';
// elHeader.style.margin = '0 auto';
// elHeader.style.marginLeft = '280px';
// elHeader.style.width = '300px';
// elHeader.style.height = '250px';
// elHeader.style.backgroundColor = 'green';
// elHeader.style.textAlign = 'center';
// elHeader.style.borderRadius = '20px';    

elBtn1.addEventListener('click', function () {
    if (elInput1.value == 1) {
        elInput2.value = 'Dushanba'
    } else if (elInput1.value == 2) {
        elInput2.value = 'Seshanba'
    } else if (elInput1.value == 3) {
        elInput2.value = 'Chorshanba'
    } else if (elInput1.value == 4) {
        elInput2.value = 'Payshanba'
    } else if (elInput1.value == 5) {
        elInput2.value = 'Juma'
    } else if (elInput1.value == 6) {
        elInput2.value = 'Shanba'
    } else if (elInput1.value == 7) {
        elInput2.value = 'Yakshanba'
    } else {
        elInput2.value = '1-dan 7-gacha, raqam kiriting 😇'
    }
})