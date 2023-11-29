const fetchButton = document.getElementById('fetchButton');
const factContainer = document.getElementById('factContainer');

fetchButton.addEventListener('click', () => {
  fetch('https://cat-fact.herokuapp.com/facts/random?amount=1')
  // .then is used to wait until data is down fetching
    .then(response => { 
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      // Assuming the response has a 'text' property containing the fact
      const fact = data.text;
      factContainer.innerHTML = `<p>${fact}</p>`;
    })
    .catch(error => {
      factContainer.innerHTML = `<p>Failed to fetch a cat fact. Error: ${error.message}</p>`; // just in case website is not working
    });
});

const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", getRandomCats);

randomCatPhoto = (json) => {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;
  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("JSON:", json);
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
}
