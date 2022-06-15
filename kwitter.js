function  addRoom(){
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room name" , room_name)
    window.location("kwitter_room.html")
  }

  var firebaseConfig = {
    apiKey: "AIzaSyAfn2CDvNSszWqQdFy872D4J1sX5wcHySw",
    authDomain: "kwitter-project-2-19267.firebaseapp.com",
    projectId: "kwitter-project-2-19267",
    storageBucket: "kwitter-project-2-19267.appspot.com",
    messagingSenderId: "832324974382",
    appId: "1:832324974382:web:14cf108ca839bf0fe52cbf",
    measurementId: "G-DKZ1QJTMWP"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");