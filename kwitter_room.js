
//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyDdU_1mQMqW1cwPvOBe0MbtYnvswW9R6WY",
      authDomain: "kwitterwil.firebaseapp.com",
      databaseURL: "https://kwitterwil-default-rtdb.firebaseio.com",
      projectId: "kwitterwil",
      storageBucket: "kwitterwil.appspot.com",
      messagingSenderId: "671126445292",
      appId: "1:671126445292:web:77163f52d0471c216899c9"
    };

    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡hola"+user_name+"!";

    function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    localStorage.setItem("room_name" , room_name);
    window.location.replace ("kwitter_page.html");

  }
    

function getData() {
      firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
          childKey  = childSnapshot.key;
          childData = childSnapshot.val();
          if(childKey != "purpose") {
firebase_message_id = childKey;
          message_data = childData;
      //Inicio del código
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" +name+ "<img class='user_tick' src='tick.png'></h4> ";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
      //Final del código
      }
    });
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");


}