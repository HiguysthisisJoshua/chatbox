const firebaseConfig = {
    apiKey: "AIzaSyBhrWSCesDa6lk-CVQ7iHkPGVjIoebvkL8",
    authDomain: "kwitter-87d3f.firebaseapp.com",
    databaseURL: "https://kwitter-87d3f-default-rtdb.firebaseio.com",
    projectId: "kwitter-87d3f",
    storageBucket: "kwitter-87d3f.appspot.com",
    messagingSenderId: "234802709341",
    appId: "1:234802709341:web:60dbba046d930c7e385eb4"
  };

  firebase.initializeApp(firebaseConfig)
user_info_name = localStorage.getItem("user_name");

roomName = localStorage.getItem("room_name");
function logout(){

    localStorage.removeItem("room_name")
    localStorage.removeItem("user_name")
    window.location ="index.html" ;
}
function sent(){

    var message = document.getElementById("mesbox").value ;
    firebase.database().ref(roomName).push({
        message:message,
        name:user_info_name
        

    })
    document.getElementById("mesbox").value = "";

}
function getData() {
    firebase.database().ref("/"+roomName).on('value', function(snapshot)
    { document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    childData = childSnapshot.val();
    if(childKey != "purpose") { firebase_message_id = childKey; 
    mes_names = childData;
          //Start code
    console.log("listofroomnames" + mes_names);
    mesg = mes_names['message'];
    usrname = mes_names['name'];
    row = "<h4>" + usrname + ": " + mesg + "</h4>";
    document.getElementById("output").innerHTML += row;
          //End code
          }});});}
    getData();