import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import { createCard, deleteCard, likeCard } from './scripts/card.js';
import { openModal, closeModal, closeModalOverlay } from './scripts/modal.js';
import { enableValidation, clearValidation } from './scripts/validation.js';
import * as api from './scripts/api.js';

const placesList = document.querySelector('.places__list');
const allPopups = document.querySelectorAll('.popup');

// Переменные для окна редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit');
const profileForm = document.forms["edit-profile"];
const profileNameInput = profileForm.elements.name;
const profileJobInput = profileForm.elements.description;

// Переменные для окна добавления карточки
const newPlaceButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_new-card');
const newPlaceForm = document.forms["new-place"];
const newPlaceprofileNameInput = newPlaceForm.elements["place-name"];
const newPlaceLinkInput = newPlaceForm.elements.link;

// Переменные для окна карточки
const imagePopupImage = document.querySelector('.popup__image');
const imagePopupContainer = document.querySelector('.popup_type_image');
const imagePopupCaption = document.querySelector('.popup__caption');

// Конфиг для валидации
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

// Функция для открытия попапа изображения
const openImagePopup = function (name, link) {
    imagePopupImage.src = link;
    imagePopupImage.alt = name;
    imagePopupCaption.textContent = name;
    openModal(imagePopupContainer);
}

// Модальное окно редактирования профиля
function handleFormProfileSubmit(evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent = profileNameInput.value;
    document.querySelector('.profile__description').textContent = profileJobInput.value;
    closeModal(profileEditPopup);
}

profileEditButton.addEventListener('click', function () {
    profileNameInput.value = document.querySelector('.profile__title').textContent;
    profileJobInput.value = document.querySelector('.profile__description').textContent;
    clearValidation(profileForm, validationConfig);
    openModal(profileEditPopup);
});


profileForm.addEventListener('submit', handleFormProfileSubmit);

// Модальное окно добавления карточки
function handleFormCardSubmit(evt) {
    evt.preventDefault();
    placesList.prepend(createCard(newPlaceprofileNameInput.value, newPlaceLinkInput.value, deleteCard, likeCard, openImagePopup));
    closeModal(newPlacePopup);
    newPlaceprofileNameInput.value = '';
    newPlaceLinkInput.value = '';
}

newPlaceButton.addEventListener('click', () => {
    clearValidation(newPlaceForm, validationConfig);
    openModal(newPlacePopup);
});


newPlaceForm.addEventListener('submit', handleFormCardSubmit);

// Закрытие окон по кнопке крестика и оверлэю
allPopups.forEach((item) => {
    item.querySelector('.popup__close').addEventListener('click', () => closeModal(item));
    item.addEventListener('click', closeModalOverlay);
  });

// Наполнение карточками из cards.js
initialCards.forEach(item => placesList.append(createCard(item.name, item.link, deleteCard, likeCard, openImagePopup)));

enableValidation(validationConfig);




async function renderCards () {
    // Запись через промис
    // api.requestToServer().then((data) => console.log(data));
    // Запись через async
    const data = await api.requestToServer();
    console.log(data);
}

renderCards();