
var firebaseConfig = {
    apiKey: "AIzaSyC_k85Gb95y__sCCQZ8-dlR54g1SEBDUFc",
    authDomain: "makesppchat-374e5.firebaseapp.com",
    databaseURL: "https://makesppchat-374e5.firebaseio.com",
    projectId: "makesppchat-374e5",
    storageBucket: "makesppchat-374e5.appspot.com",
    messagingSenderId: "896309125171",
    appId: "1:896309125171:web:75c88ef86f81d601454346"
  };

firebase.initializeApp(firebaseConfig);
let database = firebase.database();



let name = document.getElementById("username");
let input = document.getElementById("message");

input.addEventListener('keypress', function(event) {
  if(event.key == "Enter") {
    
    database.ref("messages").push({
     name: name.value,
     value: input.value
    })
    input.value=""


  }

})


database.ref("messages").on("child_added",function(message){

  let messages = document.getElementById("messages");
  let name = message.val().name;
  let value = message.val().value;

  let div = document.createElement("div");
  let span = document.createElement("span");
  span.innerHTML = "@" + name ;
  let p = document.createElement("p");
  p.innerHTML = value;

  div.appendChild(span);
  div.appendChild(p);

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;

})