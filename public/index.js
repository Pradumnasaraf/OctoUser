const userInput = document.getElementById('user-input');
const searchBtn = document.getElementById('search-btn');
const output = document.querySelector("#output");
const userImage = document.querySelector("#profile-img");

searchBtn.addEventListener('click', () => {
    const fetchUrl = `https://api.github.com/users/${userInput.value}`;

    fetch(fetchUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                userImage.style.visibility = 'hidden';
                output.style.color = '#FF3131';
                output.innerHTML = `User not found`;
            }
        })
        .then(data => {
            console.log(`User with ${data.name} found`);
            genrateOutput(data);
        })
        .catch(error => {
            console.log(error);
        });
})

function genrateOutput(data) {
    userImage.src = data.avatar_url;
    userImage.alt = `picture of ${data.name}`;
    userImage.style.visibility = 'visible';
    let userName = ""
    if (data.name === null) {
        userName = "";
    } else {
        userName = data.name;
    }
    const date = data.created_at.split('T')[0];
    output.style.color = '#39FF14';
    output.innerHTML =
        `Hi, ${userName}<br><br><br>
Followers: ${data.followers}<br><br>
Total repositories: ${data.public_repos}<br><br>
Created on: ${date}`;
}
