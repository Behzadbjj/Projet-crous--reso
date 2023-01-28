class Map{
    constructor(){
           
    // on peut faire  une reqéute HTTP en AJAX les méthode fetch
    // on utilise fetch  de la maniére suivante
        this. map = L.map('map').setView([
            50.628734228603804, 3.0600294541691095],13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
              maxZoom:18,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
    this.url='https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=ensemble-des-lieux-de-restauration-des-crous&q=&rows=20&facet=type&facet=zone'
    // for marker place:
    this.marker= L.marker(lieu.fields.geolocalisation).addTo(map)
            

    this.fetch(url)
    
    this.then((res) =>res.json())
    this.then((res) =>{
      // traitement Js 
      this. lieux= res.records;
      console.log(lieux[2].fields.title);
    
      // on fait une boucle pour lire innfos du tableau (lieu)
      for (this. lieu of lieux ){
        console.log(lieu.fields.geolocalisation);
        // .bindPopup(lieu.fields.contact) .openPopup()
    
        // quand on click 
    this. marker.on("click",()=> save(lieu.fields));
      }

    //    déclarer section pour afficher 
      this.addDiv = document.querySelector(".secondsec");
    })
    this.catch((Error)=> console.log("Error de type : " +Error))

    this. btnDel=document.querySelector(".btnDel");

       
   this. addDiv.addEventListener('click', (e) => {
        // On vérifie que la cible correspond à un élément dont la class est 'taskDel'
        if (e.target.className === 'btnDel') {
            delTask(e.target);
            // addDiv.style.display="none";
        }
      });
   
          }save(res){
            console.log(this.res.title)
           this.addDiv.style.display="flex";
           this.addDiv.innerHTML = `
           
           <img src="assets/images/img.png" alt="">
           <div class="divInfoCART">
             <h1>
             ${this.res.title}
             </h1>
             <p> ${this.res.infos}</p>
           </div>
             <button class="btnSave">Enregistrer</button>
             <button class="btnDel">X</i></button> `;
          }
    
     delTask(element) {
            // On supprime le parent de l'élément (la tâche créée) du D.O.M
            element.parentElement.remove();
          }
          
    
    view(){
        
    }
}



    
    
    
 
    
    
    // esm ahye parametre dakhel parantez del bekhah ast response ya res ya..
    // aval fetch bad 2 ta then va bad catch
    // dar marahel bad then 2 khod ra jozeiyat midahim
   
    
    
    
    
    
 
   
    