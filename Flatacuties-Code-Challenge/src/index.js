import json from "../db.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", (e) => {
  const navBar = document.getElementById("character-bar");
  function getCharacterDetails() {
    // return fetch("http://localhost:3000/characters")
    //   .then((res) => res.json())
    //   .then((characters) => {

    // console.log(characters);
    json.characters.forEach((character) => {
      const characterView = document.createElement("span");
      navBar.appendChild(characterView);
      characterView.id = character.id;
      characterView.innerText = character.name;
      characterView.style.cursor = "pointer";

      characterView.addEventListener("click", (e) => {
        // e.preventDefault();
        const characterName = document.getElementById("name");
        characterName.innerText = character.name;
        const characterImage = document.getElementById("image");
        characterImage.src = character.image;

        const currentVotes = document.getElementById("vote-count");
        currentVotes.innerText = character.votes;

        // form for submitting votes ,sets votes input value to be displayed
        const form = document.getElementById("votes-form");
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const votes = document.getElementById("votes").value;
          if (isNaN(votes) === false) {
            currentVotes.innerText = votes;
            // form.reset();
          } else {
            alert("Votes can only be in numbers");
            form.reset();
          }
          console.log(votes);
        });
      });
    });
    // });
  }
  getCharacterDetails();
});
