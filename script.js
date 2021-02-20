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
  let auth = firebase.auth();
  let button = document.getElementById('sign-up')
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  let signin = document.getElementById('account')

  button.addEventListener('click' , function(){
      let gmail = email.value.replace("@gmail.com" , "")
      let pass = password.value.toString()
      console.log(gmail)

      auth.createUserWithEmailAndPassword(email.value,pass).then(function(user){
          console.log('Signed Up')

          database.ref().child('users').child(gmail).child('email').set(user.user.email).then(function(){
              window.location.href = "main.html"
          })

      })
    console.log('clicked')
  })

  signin.addEventListener('click' , function(){
    window.location.href = 'signIn.html'
  })