const getUsers = () => {
  fetch("https://randomuser.me/api/?results=3")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
};

getUsers();

const displayUsers = (users) => {
  //using object destructuring
  const { results } = users;
  const buddyContainer = document.getElementById("users");
  for (const buddy of results) {
    console.log(buddy);
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${buddy.picture.thumbnail}">
        <h3> Name: ${buddy.name.first} ${buddy.name.last} </h3>
        <p> Gender: ${buddy.gender}
        <p> Age: ${buddy.dob.age}
        <p> Cell: ${buddy.cell}</p>
        <p> Email: ${buddy.email}
    `;
    buddyContainer.appendChild(div);
  }
};

function reloadPage() {
  // reloads the whole page
  window.location.reload();
}
