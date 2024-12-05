import { FireBaseService } from "./firebaseService.js";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCi9QXuAfNorwth9uuyOnd1iKuvoMdCjpk",
    authDomain: "assignment-10c.firebaseapp.com",
    databaseURL: "https://assignment-10c-default-rtdb.firebaseio.com",
    projectId: "assignment-10c",
    storageBucket: "assignment-10c.appspot.com",
    messagingSenderId: "974946854890",
    appId: "1:974946854890:web:e9373cf55951c59743f493"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database();
// function getData(){
//         database.ref('/Catalogies/Cate1').once('value', function(snapshot){
//             snapshot.forEach(function(childSnapshot){
//                 var childKey = childSnapshot.key;
//                 var childData = childSnapshot.val();
//                 document.getElementById("list-catalog").innerHTML = childData['nameCate'];
//             })
//         })
//     }
//     getData();

database.ref('Catalogies').orderByKey().once('value').then(function(snapshot) {

var listCatalog = snapshot.val()

let listCatalogView = document.querySelector('#list-catalog')

console.log(listCatalog)
    for (let index in listCatalog) {
            console.log(listCatalog[index])
          
            // Tạo thêm 1 dòng ở cuối bảng bằng cú pháp sau
            let dong_moi = listCatalogView.insertRow(-1);

            // Thêm ô thứ nhất, chỉ số thứ tự là 0, ô này dùng để hiển thị ID
            let o1 = dong_moi.insertCell(0);
            o1.innerText = listCatalog[index].IDCate;

            // Thêm ô thứ hai, chỉ số thứ tự là 1, ô này dùng để hiển thị username
            let o2 = dong_moi.insertCell(1);
            o2.innerText = listCatalog[index].nameCate;

            // Thêm ô thứ ba, chỉ số thứ tự là 2, ô này dùng để hiển thị fullname
            let o3 = dong_moi.insertCell(2);
            o3.innerHTML = `<td><a href='update_loai.html/${listCatalog[index].IDCate}'><i class='fa fa-edit' style='font-size:24px'></i></a></td>`;

            // Thêm ô thứ bốn, chỉ số thứ tự là 3, ô này dùng để hiển thị email
            let o4 = dong_moi.insertCell(3);
            o4.innerHTML = `<td><a href ='remove.html/${listCatalog[index].IDCate}'><i class='fa fa-trash-o' style='font-size:24px'></i></a></td>`;
}

})
window.addTodo = function () {
    var id = document.querySelector("#id").value;
    var nameCat = document.querySelector("#nameCat").value;
  
    var data = { IDCate: id, nameCate: nameCat};
    FireBaseService
      .addTodo(data)
      .then((res) => {
        alert("Da them thanh cong");
      })
      .catch(function (error) {
        console.log(error);
      });
  };