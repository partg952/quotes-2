

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


  let auth = firebase.auth()
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  let button = document.getElementById('sign-up')

  button.addEventListener('click' , function(){
      auth.signInWithEmailAndPassword(email.value,password.value)
      .then(function(){
          console.log('signed in')
          window.location.href = "main.html"
      })
  })