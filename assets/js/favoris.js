
// ** declare le variables **
let divContainer = document.querySelector(".divContainer");
let detail = JSON.parse(localStorage.getItem('titre')) || [];
// **  boucle for pour aficher l'info dans page favoris **
for (i = 0; i < detail.length; i++) {
  function favorisDisplay() {
    divContainer.innerHTML += `
  <div class="addDiv">
    <img src="assets/images/img.png" alt="">
    <div class="divInfoCART">
    <h1>${detail[i].title}</h1>
    <p>${detail[i].contact} </p>
    <p>${detail[i].info} </p>
    </div>
    <button class="btnDel">X</i></button> 
  </div>`;
  }
  favorisDisplay();
} 

//  ** écouteur lorsqu'on click supprimer la bannière **
divContainer.onclick = (event) => {
  let target = event.target;
  if (target.className == "btnDel") {
    target.parentElement.remove()
    localStorage.removeItem('titre');
  }
}





