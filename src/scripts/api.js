// Токен: 0143bb88-07ef-4172-9e8d-bc173fe27541
// Идентификатор группы: cohort-magistr-2
// GET https://nomoreparties.co/v1/cohort-magistr-2/users/me



const onResponse = function (res) {
    return res.ok 
    ? res.json() 
    : res.json()
    .then(err => Promise.reject(err));
}

const requestToServer = function () {
    return fetch('https://nomoreparties.co/v1/cohort-magistr-2/cards', {
        headers: {
            authorization: '0143bb88-07ef-4172-9e8d-bc173fe27541'
        }
    })
    .then(onResponse);
    // .then((data) => {
    //     console.log(data);
    // });
    // .catch((err) => {});
}





export { requestToServer };