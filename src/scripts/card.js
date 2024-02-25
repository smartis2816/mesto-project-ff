import { putLike, removeLike } from './api.js';

const template = document.querySelector('#card-template').content;

const createCard = function (card, profileID, deletePlace, likeCard, openImagePopup) {
    const cardElement = template.querySelector('.card').cloneNode(true);
    const likesCount = cardElement.querySelector('.card__like-count');
    const likeButton = cardElement.querySelector('.card__like-button');

    likesCount.textContent = card.likes.length;
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').src = card.link;
    likeButton.addEventListener('click', () => likeCard(card._id, likeButton, likesCount));
    cardElement.querySelector('.card__image').addEventListener('click', () => openImagePopup(card.name, card.link));

    cardElement.dataset.id = card._id;

    if (card.owner._id != profileID) {
        cardElement.querySelector('.card__delete-button').remove();
    } else {
        cardElement.querySelector('.card__delete-button').addEventListener('click', () => deletePlace(card._id));
    }
    return cardElement;
}

const likeCard = function (cardID, likeButton, likesCount) {
    if (!likeButton.classList.contains('card__like-button_is-active')) {
        putLike(cardID)
            .then((res) => {
                likeButton.classList.add('card__like-button_is-active');
                likesCount.textContent = res.likes.length;
            });
    } else {
        removeLike(cardID)
            .then((res) => {
                likeButton.classList.remove('card__like-button_is-active');
                likesCount.textContent = res.likes.length;
            });
    }
}

export { createCard, likeCard };