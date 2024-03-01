import { putLike, removeLike } from './api.js';

const template = document.querySelector('#card-template').content;

const createCard = function (card, profileID, deletePlace, likeCard, openImagePopup) {
    const cardElement = template.querySelector('.card').cloneNode(true);
    const likesCount = cardElement.querySelector('.card__like-count');
    const likeButton = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image');

    likesCount.textContent = card.likes.length;
    cardElement.querySelector('.card__title').textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;
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
    likeButton.classList.contains('card__like-button_is-active') 
    ? deleteLike(cardID, likeButton, likesCount) 
    : addLike(cardID, likeButton, likesCount);
}

const addLike = function (cardID, likeButton, likesCount) {
    putLike(cardID)
        .then((res) => {
            likeButton.classList.add('card__like-button_is-active');
            likesCount.textContent = res.likes.length;
        })
        .catch(err => console.log(err));
}

const deleteLike = function (cardID, likeButton, likesCount) {
    removeLike(cardID)
        .then((res) => {
            likeButton.classList.remove('card__like-button_is-active');
            likesCount.textContent = res.likes.length;
        })
        .catch(err => console.log(err));
}

export { createCard, likeCard };