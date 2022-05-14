//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
//оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.querySelector("#font-size-control");
console.log(fontSizeControl);

const text = document.querySelector("#text");

const onFontSize = () => {
    text.style.fontSize = `${fontSizeControl.value}px`;
    console.log(text.style.fontSize);
};

fontSizeControl.addEventListener('input', onFontSize);
fontSizeControl.dispatchEvent(newEvent('input'));