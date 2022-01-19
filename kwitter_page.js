var firebaseConfig = {
      apiKey: "AIzaSyBg_deDKOMqyo-Mq2q7PbCBepkOSItCmIY",
  authDomain: "kwitter-project-e3e2f.firebaseapp.com",
  databaseURL: "https://kwitter-project-e3e2f-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-e3e2f",
  storageBucket: "kwitter-project-e3e2f.appspot.com",
  messagingSenderId: "763138139002",
  appId: "1:763138139002:web:cf23eb9ed7c46e6bf8ecc3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     
     user_name= localStorage.getItem("user_name");
     room_name= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
