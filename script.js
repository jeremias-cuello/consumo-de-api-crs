function loadUser(user){
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td><a href="mailto:${user.email}">${user.email}</a></td>
        <td>${user.address.street}</td>
        <td>${user.address.suite}</td>
        <td>${user.address.city}</td>
        <td>${user.address.zipcode}</td>
        <td><a target="_blank" href="https://www.google.com/maps?q=${user.address.geo.lat}, ${user.address.geo.lng}">Link</a></td>
        <td>${user.phone}</td>
        <td><a target="_blank" href="https://${user.website}">${user.website}</a></td>
        <td>${user.company.name}</td>
        <td>${user.company.catchPhrase}</td>
        <td>${user.company.bs}</td>
    `;
    document.querySelector('tbody').appendChild(tr);
}

/**
 * @param {[user]} users
 */
function loadUsers(users) {
    users.forEach(loadUser);
}

function eliminarLuego(e, cb){
    cb();
    e.parentElement.removeChild(e);
}

document.querySelector('#load').addEventListener('click', e => {
    eliminarLuego(e.target, () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(loadUsers)
    })
});
