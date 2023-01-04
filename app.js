function clickSingleA(a) {
  let items = document.querySelectorAll(".single.active");

  if (items.length) {
    items[0].className = "single";
  }

  a.className = "single active";
}

const item = {
  name: "paris jacket",
  price: "$89.99",
  img: "https://www.thesoccerstore.com/media/catalog/product/cache/276475ec3ca32366d643b8dc06b4c45e/c/i/ci9270-410-phsfh001.jpg",
};

const fillCards = () => {
  let cardsContainer = document.getElementById("cards");
  let collectionCards = document.getElementById("collection-cards");
  for (let i = 1; i <= 4; i++) {
    let div = document.createElement("div");
    cardsContainer.appendChild(div);
    let img = document.createElement("img");
    let strong = document.createElement("strong");
    let span = document.createElement("span");
    div.className = "card";
    div.appendChild(img);
    div.appendChild(strong);
    div.appendChild(span);
    img.src = item.img;
    strong.innerHTML = item.name;
    span.innerHTML = item.price;
  }
  for (let i = 1; i <= 8; i++) {
    let div = document.createElement("div");
    collectionCards.appendChild(div);
    let img = document.createElement("img");
    let strong = document.createElement("strong");
    let span = document.createElement("span");
    div.className = "card";
    div.appendChild(img);
    div.appendChild(strong);
    div.appendChild(span);
    img.src = item.img;
    strong.innerHTML = item.name;
    span.innerHTML = item.price;
  }
};

const fillNewCollectionCards = () => {
  let cardsContainer = document.getElementById("new-collection-cards");
  for (let i = 1; i <= 4; i++) {
    let div = document.createElement("div");
    cardsContainer.appendChild(div);
    let img = document.createElement("img");
    let strong = document.createElement("strong");
    let span = document.createElement("span");
    div.className = "card";
    let detailsDiv = document.createElement("div");
    detailsDiv.className = "cardDetails";
    div.appendChild(img);
    div.appendChild(detailsDiv);
    detailsDiv.appendChild(strong);
    detailsDiv.appendChild(span);
    img.src =
      "https://cdn.shopify.com/s/files/1/0095/2837/7391/products/image_5decf79d-d74a-4de2-9954-3c8b42d56478_800x.jpg?v=1614708130";
    strong.innerHTML = item.name;
    span.innerHTML = item.price;
  }
};

const navMenuBtn = document.querySelector(".nav-menu-btn");
const sideNav = document.querySelector(".side-nav");
navMenuBtn.addEventListener("click", function () {
  sideNav.classList.toggle("active");
});

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal

// span.onclick = function () {
//   modal.style.display = "none";
// };

const closeModal = e => {
    const modal =document.getElementById(`myModal ${e}`)
    modal.style.display = 'none'
}
const showModal = e => {
    e === 'registerModal' && closeModal('loginModal')
    const modal =document.getElementById(`myModal ${e}`)
    
    modal.style.display = 'block'
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const passwordValidation = e => {
    const password = document.querySelectorAll('#password')[1].value
    console.log("🚀 ~ file: app.js:116 ~ passwordValidation ~ password", password)
    let validation = document.getElementById('validation')
    console.log("🚀 ~ file: app.js:119 ~ passwordValidation ~ e.value", e.value)
    if(password === e.value){
        validation.innerHTML = 'Passwords are matching'
        validation.style.color = 'green'
    } else {
        validation.innerHTML = 'Passwords don`t match'
        validation.style.color = 'red'
    }

}
fillCards();
fillNewCollectionCards();
