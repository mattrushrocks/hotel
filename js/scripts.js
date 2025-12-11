// Hamburger button toggle
const hambtn = document.querySelector("#hamburgerBtn");
const pagewrap = document.querySelector("#pageWrapper");

if (hambtn && pagewrap) {
  hambtn.addEventListener("click", () => {
    pagewrap.classList.toggle("moveOver");
    console.log("Hamburger toggled:", pagewrap.classList.contains("moveOver"));
  });
}

// Hotel cards
import { hotels } from "./hoteldata.js";

const hotelCard = document.querySelector("#cards");

hotels.forEach(hotel => {
  const mySection = document.createElement("section");

  const myImg = document.createElement("img");
  myImg.src = hotel.image;
  myImg.alt = hotel.name;

  const theName = document.createElement("h2");
  theName.textContent = hotel.name;

  const theAddress = document.createElement("address");
  theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

  const thePhone = document.createElement("a");
  thePhone.textContent = hotel.phone;
  thePhone.href = `tel:${hotel.phone}`;

  mySection.appendChild(myImg);
  mySection.appendChild(theName);
  mySection.appendChild(theAddress);
  mySection.appendChild(thePhone);

  hotelCard.appendChild(mySection);
});
