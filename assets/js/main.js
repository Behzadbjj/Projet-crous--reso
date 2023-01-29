
// **crée le map **
let map = L.map('map').setView([50.628734228603804, 3.06002945416966], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
//**   on peut faire  une reqéute HTTP en AJAX les méthode fetch**
// ** on utilise fetch  de la maniére suivante **
const url = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=ensemble-des-lieux-de-restauration-des-crous&q=&rows=20&facet=type&facet=zone'
let addDiv = document.querySelector(".secondsec");
fetch(url)
  .then((res) => res.json())
  .then((res) => {
    // traitement Js 
    const lieux = res.records;
    console.log(lieux);
  //**  un  boucle  pour lire l'infos de fetch **
    for (let lieu of lieux) {
      // ** declarer le markeur **
      let marker = L.marker(lieu.fields.geolocalisation).addTo(map);

      //**  lorsqu'on click sur la markeur afficher la bannière **
      marker.on("click", add);
      function add() {
        addDiv.style.display = "flex";
        addDiv.innerHTML = `
        <img src="assets/images/img.png" alt="">
        <div class="divInfoCART">
          <h1>${lieu.fields.title}</h1>
          <p> ${lieu.fields.contact}</p>
          <p> ${lieu.fields.infos}</p>
        </div>
        <div class='btns'>
          <button class="btnSave">Enregistrer</button>
          <button class="btnDel">X</i></button> 
        </div>`;
            // **  pour supprime la bannier  **
        addDiv.onclick = ('click', (e) => {
            if (e.target.className === "btnDel"){
              addDiv.style.display="none";
                // **  pour stocker et récupère l'infos de chaque liue ** 
            } else if (e.target.className === "btnSave"){
              let place= JSON.parse(localStorage.getItem('titre')) ||[];
              let title = lieu.fields.title;
              let contact = lieu.fields.contact;
              let info = lieu.fields.infos;
              let infos= { title,contact,info}
              place.push(infos);
                localStorage.setItem('titre',JSON.stringify(place));
                alert(' ajouté aux favoris ');
            }

          })         
        }
      }
  })
  // 
  .catch((Error) => console.log("Error de type : " + Error))








 
    
    




























// pour tester add in page favoris
// const khkh=  addDiv.innerHTML = `

// <img src="assets/images/img.png" alt="">

// <div class="divInfoCART">
// <h1>
// </h1>
// </div>
// <button class="btnSave">Enregistrer</button>
// <button class="btnDel">X</i></button> `;

// localStorage.setItem("meu" ,khkh);

//  let hhhf =localStorage.getItem("meu");
// console.log(hhhf);









