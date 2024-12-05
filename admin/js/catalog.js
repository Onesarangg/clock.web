var firebaseConfig = {
  apiKey: "AIzaSyDDuSdp0H040NQiEiJ3RVukSQjArwii6Hc",
  authDomain: "database-assignment-cb531.firebaseapp.com",
  databaseURL: "https://database-assignment-cb531-default-rtdb.firebaseio.com",
  projectId: "database-assignment-cb531",
  storageBucket: "database-assignment-cb531.appspot.com",
  messagingSenderId: "366407501418",
  appId: "1:366407501418:web:a4b0b359e97a07fd916c13",
  measurementId: "8Z0HFXjBZEjCtfMvx4ovzcfIvahnUkbPm6ffKXQU"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref('/Catalog').orderByKey().once('value').then(function(snapshot) {
 
  var listCatalog = snapshot.val()

    let listCatalogView = document.querySelector('#list-catalog')

    console.log(listCatalog)

    for(let index in listCatalog) {
        console.log(listCatalog[index])
        let catalog = `<div class="play-on-scroll">
                            <button class="" data-cosmetic-type="all">
                                ${listCatalog[index].nameCat}
                            </button>
                        </div> `
        
        listCatalogView.innerHTML+=catalog
    }
  
})

