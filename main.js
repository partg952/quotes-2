

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


let plus = document.getElementById('plus')
let signout = document.getElementById('sign-out')
let data = firebase.database();
let div = document.getElementById('main-container')
let prog = document.getElementById('prog')

data.ref().child('quotes').child("num").on('value' , function(snapshot){
    let num = snapshot.val()
    console.log(snapshot.val())
    while(num>0){
        prog.style.visibility = 'hidden'
        data.ref().child('quotes').child(num).on('value' , function(snapshot2){
            console.log(snapshot2.val())
            let h1 = document.createElement('h3')
            h1.classList.add("styles")
            h1.innerText = snapshot2.val().toString()
            div.appendChild(h1)
            
        })
        num--
    }
})  


plus.addEventListener('click' , function(){
    window.location.href = "add.html"
})


signout.addEventListener('click' , function(){
    firebase.auth().signOut().then(function(){
        console.log('signed out')
        window.location.href = "sign_up.html"
    })
})
