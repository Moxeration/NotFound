// script.js

// Function to load JSON files from the server
async function loadJsonFiles() {
    const response = await fetch('https://github.com/WINCYM32/NotFound/tree/0aa9b523d4a51d7ddec9b97cf2c2c140851d3140/source/Root/C%3A/Program%20Files'); // Change this path to your server directory containing the JSON files
    const files = await response.json(); // The server should return a list of JSON files.

    files.forEach(async (file) => {
        const fileResponse = await fetch(`https://github.com/WINCYM32/NotFound/tree/0aa9b523d4a51d7ddec9b97cf2c2c140851d3140/source/Root/C%3A/users/Default/Desktop${file}`);
        const data = await fileResponse.json();
        createIcon(data);
    });
}

// Function to create an icon on the desktop with the JSON data
function createIcon(data) {
    const icon = document.createElement('div');
    icon.classList.add('desktop-icon');

    const link = document.createElement('a');
    link.href = data.url;
    link.target = '_blank';
    link.title = data.name;

    const image = document.createElement('img');
    image.src = data.icon;
    image.alt = `Icon of ${data.name}`;

    const name = document.createElement('p');
    name.textContent = data.name;

    link.appendChild(image);
    link.appendChild(name);
    icon.appendChild(link);

    document.getElementById('desktop').appendChild(icon);
}

// Call the function to load the JSON files
loadJsonFiles();
