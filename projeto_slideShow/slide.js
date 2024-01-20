'use strict';

const images = [
    { 'íd': '1', 'url': './img/overlord.jpeg' },
    { 'íd': '2', 'url': './img/slime.png' },
    { 'íd': '3', 'url': './img/toji.png' }
]

const containerItens = document.querySelector('#container-itens');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class="item">
        <img src="${image.url}"/>
        </div>
        `
    }
    );
}

loadImages(images, containerItens);

let itens = document.querySelectorAll('.item');

const previous = () => {
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll('.item');
}
const next = () => {
    const lastItem = itens[itens.length - 1];
    containerItens.insertBefore(lastItem, itens[0])
    itens = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);