
//AÑADE LOS ENLACES FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyB4sF8nuJQ-4CTuoKR4EuvPIjs0iDu9z_Y",
    authDomain: "pruebaclase-bdc37.firebaseapp.com",
    projectId: "pruebaclase-bdc37",
    storageBucket: "pruebaclase-bdc37.appspot.com",
    messagingSenderId: "112148154468",
    appId: "1:112148154468:web:5368e8ef5cfd1ee66c7771"
  };
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"   
    });
  }

  