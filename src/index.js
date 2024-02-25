import './pages/index.css';
import { createCard, likeCard } from './scripts/card.js';
import { openModal, closeModal, closeModalOverlay } from './scripts/modal.js';
import { enableValidation, clearValidation } from './scripts/validation.js';
import * as api from './scripts/api.js';

const placesList = document.querySelector('.places__list');
const allPopups = document.querySelectorAll('.popup');

// Переменные для элементов с данными пользователя
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__image');
let profileID = '';
let placeID = '';

// Переменные для окна редактирования профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit');
const profileForm = document.forms["edit-profile"];
const profileConfirmButton = profileForm.querySelector('.popup__button');
const profileNameInput = profileForm.elements.name;
const profileJobInput = profileForm.elements.description;

// Переменные для аватара
const avatarEditButton = document.querySelector('.profile__image');
const avatarEditPopup = document.querySelector('.popup_type_avatar');
const avatarForm = document.forms["edit-avatar"];
const avatarConfirmButton = avatarForm.querySelector('.popup__button');
const avatarInput = avatarEditPopup.querySelector(".popup__input_type_url");

// Переменные для окна добавления карточки
const newPlaceButton = document.querySelector('.profile__add-button');
const newPlacePopup = document.querySelector('.popup_type_new-card');
const newPlaceForm = document.forms["new-place"];
const newPlaceConfirmButton = newPlaceForm.querySelector('.popup__button');
const newPlaceprofileNameInput = newPlaceForm.elements["place-name"];
const newPlaceLinkInput = newPlaceForm.elements.link;

// Переменные для удаления карточки
const deletePlacePopup = document.querySelector(".popup_type_delete");
const deletePlaceButtonConfirm = deletePlacePopup.querySelector(".popup__button");

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
    api.editUserData(profileNameInput.value, profileJobInput.value)
        .then(res => {
            profileConfirmButton.textContent = 'Сохранение...';
            profileName.textContent = res.name;
            profileAbout.textContent = res.about;
            closeModal(profileEditPopup);
        })
        .catch((err) => {console.log(err);});
}

profileEditButton.addEventListener('click', function () {
    if (profileConfirmButton.textContent === 'Сохранение...') {
        profileConfirmButton.textContent = 'Сохранить'
    }
    profileNameInput.value = profileName.textContent;
    profileJobInput.value = profileAbout.textContent;
    clearValidation(profileForm, validationConfig);
    openModal(profileEditPopup);
});


profileForm.addEventListener('submit', handleFormProfileSubmit);

// Модальное окно для смены картинки аватара
function handleFormAvatarSubmit(evt) {
    evt.preventDefault();
    api.changeAvatar(avatarInput.value)
        .then(res => {
            avatarConfirmButton.textContent = 'Сохранение...';
            avatarEditButton.style = `background-image: url('${res.avatar}')`;
            closeModal(avatarEditPopup);
        })
        .catch((err) => {console.log(err);});
}

avatarEditButton.addEventListener('click', function () {
    clearValidation(avatarForm, validationConfig);
    if (avatarConfirmButton.textContent === 'Сохранение...') {
        avatarConfirmButton.textContent = 'Сохранить'
    }
    openModal(avatarEditPopup);
});

avatarForm.addEventListener('submit', handleFormAvatarSubmit);

// Модальное окно добавления карточки
function handleFormCardSubmit(evt) {
    evt.preventDefault();
    api.addCard(newPlaceprofileNameInput.value, newPlaceLinkInput.value)
        .then(res => {
            newPlaceConfirmButton.textContent = 'Сохранение...';
            placesList.prepend(createCard(res, profileID, deletePlace, likeCard, openImagePopup));
            closeModal(newPlacePopup);
            newPlaceprofileNameInput.value = '';
            newPlaceLinkInput.value = '';
        })
        .catch((err) => {console.log(err);});
}

newPlaceButton.addEventListener('click', () => {
    if (newPlaceConfirmButton.textContent === 'Сохранение...') {
        newPlaceConfirmButton.textContent = 'Сохранить'
    }
    clearValidation(newPlaceForm, validationConfig);
    openModal(newPlacePopup);
});

newPlaceForm.addEventListener('submit', handleFormCardSubmit);

// Модальное окно удаления карточки
function deletePlace(cardID) {
    placeID = cardID;
    openModal(deletePlacePopup);
}

function handleDeletePlaceSubmit(evt) {
    evt.preventDefault();
    api.delCard(placeID)
        .then(() => {
            document.querySelector(`.card[data-id="${placeID}"]`).remove();
            placeID = '';
            closeModal(deletePlacePopup);
        })
        .catch((err) => {console.log(err);});
    
}

deletePlaceButtonConfirm.addEventListener('click', handleDeletePlaceSubmit);

// Закрытие окон по кнопке крестика и оверлэю
allPopups.forEach((item) => {
    item.querySelector('.popup__close').addEventListener('click', () => closeModal(item));
    item.addEventListener('click', closeModalOverlay);
});

// Запуск валидации
enableValidation(validationConfig);

// Получение данных от сервера и наполнение карточками
function renderContent() {
    Promise.all([api.getUserData(), api.getCards()])
        .then(([userData, cards]) => {
            console.log(userData);
            console.log(cards);
            profileName.textContent = userData.name;
            profileAbout.textContent = userData.about;
            profileAvatar.style = `background-image: url('${userData.avatar}')`;
            profileID = userData["_id"];
            cards.forEach(item => placesList.append(createCard(item, profileID, deletePlace, likeCard, openImagePopup)));
        })
        .catch((err) => {console.log(err);});
}

renderContent();
