import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import { createCard, deleteCard } from './scripts/card.js';
import { openModal, closeModal, closeModalOverlay, closeModalEscape } from './scripts/modal.js';


const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit');

const newCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');

const openImagePopup = document.querySelector('.popup__image');
const imagePopup = document.querySelector('.popup_type_image');
const popupCaption = document.querySelector('.popup__caption')

const allPopups = document.querySelectorAll('.popup');

// Переменные для окна редактирования профиля
const profileForm = document.forms["edit-profile"];
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.description;
const profileTitle = document.querySelector('.profile__title').textContent;
const profileDescription = document.querySelector('.profile__description').textContent;
nameInput.value = profileTitle;
jobInput.value = profileDescription;

// Создание карточки
initialCards.forEach(item => placesList.append(createCard(item.name, item.link, deleteCard)));

// Модальное окно редактирования профиля
profileEditButton.addEventListener('click', () => {
    openModal(profileEditPopup);
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;
    closeModal(profileEditPopup);
}

profileForm.addEventListener('submit', handleFormSubmit);

// Модальное окно добавления карточки
newCardButton.addEventListener('click', () => {
    openModal(newCardPopup);
});

// Закрытие окон по кнопке крестика, оверлэю
allPopups.forEach((item) => {
    item.querySelector('.popup__close').addEventListener('click', () => closeModal(item));
    item.addEventListener('click', closeModalOverlay);
  });



