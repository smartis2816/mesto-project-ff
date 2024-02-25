const configAPI = {
    url: 'https://nomoreparties.co/v1/cohort-magistr-2',
    headers: {
        'Content-Type': 'application/json',
        authorization: '0143bb88-07ef-4172-9e8d-bc173fe27541'
    }
}

const getUserData = function () {
    return request('users/me');
}

const getCards = function () {
    return request('cards');
}

const editUserData = function (profileName, profileAbout) {
    return request('users/me', {
        method: 'PATCH',
        body: JSON.stringify({
            name: profileName,
            about: profileAbout
        })
    });
}

const addCard = function (cardName, cardLink) {
    return request('cards', {
        method: 'POST',
        body: JSON.stringify({
            name: cardName,
            link: cardLink
        })
    });
}

const delCard = function (idCard) {
    return request(`cards/${idCard}`, {
        method: 'DELETE',
    });
}

const putLike = function (idCard) {
    return request(`cards/likes/${idCard}`, {
        method: 'PUT',
    });
}

const removeLike = function (idCard) {
    return request(`cards/likes/${idCard}`, {
        method: 'DELETE',
    });
}

const changeAvatar = function (imageURL) {
    return request('users/me/avatar', {
        method: 'PATCH',
        body: JSON.stringify({
            avatar: imageURL
        })
    });
}

const request = function (endPoint, options = {}) {
    return fetch(`${configAPI.url}/${endPoint}`, {
        method: 'GET',
        headers: configAPI.headers,
        ...options
    })
    .then(onResponse);
}

const onResponse = function (res) {
    return res.ok 
    ? res.json() 
    : res.json()
        .then(err => Promise.reject(err));
}

export { request, onResponse, getUserData, getCards, editUserData, addCard, delCard, putLike, removeLike, changeAvatar };