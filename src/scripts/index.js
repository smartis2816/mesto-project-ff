
const template = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

const createCard = function (name, link, deleteCard) {
    const cardElement = template.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
    
    return cardElement;
}

const deleteCard = evt => evt.target.closest('.card').remove();

initialCards.forEach(item => placesList.append(createCard(item.name, item.link, deleteCard)));

// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
