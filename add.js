

var firebaseConfig = {
    apiKey: "AIzaSyCosExMs5hv0ivr6DQAkyoXcbcVVTQGRbY",
    authDomain: "quotesapp-89280.firebaseapp.com",
    projectId: "quotesapp-89280",
    storageBucket: "quotesapp-89280.appspot.com",
    messagingSenderId: "659298615512",
    appId: "1:659298615512:web:fc34b313fc721fb253d7ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


let database = firebase.database();
let button = document.getElementById('post')
let write = document.getElementById('quote')
let back = document.getElementById('back')
let num = 0



database.ref().child('quotes').child('num').on('value' , function(snapshot){
    console.log(snapshot.val())
    num = snapshot.val();
})

button.addEventListener('click' , function(){
    if(write.value.length==0){

    }
    else{
        num++
        console.log('clicked')
        database.ref().child('quotes').child(num).set(write.value)
        database.ref().child('quotes').child('num').set(num)
        }


})

back.addEventListener('click' , function(){
    console.log('clicked')
    window.location.href = "main.html"
})