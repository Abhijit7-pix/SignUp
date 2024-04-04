// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBo2ACOnnWR4jEz86OHDh4s_0YSczfXmgY",
  authDomain: "mini-project-5-3bf69.firebaseapp.com",
  projectId: "mini-project-5-3bf69",
  storageBucket: "mini-project-5-3bf69.appspot.com",
  messagingSenderId: "487136113486",
  appId: "1:487136113486:web:c034ef534c5becce29a41f"
  };
  
  
  firebase.initializeApp(firebaseConfig);
 

  const auth = firebase.auth();
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Sign up with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        var user = userCredential.user;
        // Update user's display name
        user.updateProfile({
          displayName: name
        }).then(function() {
          // Update successful
          document.getElementById('message').innerText = 'Sign up successful!';
          window.location.href='Home.html';
        }).catch(function(error) {
          // An error occurred
          document.getElementById('message').innerText = error.message;
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById('message').innerText = errorMessage;
      });
  });
  function redirect_login() {
    
    window.location.href = 'index.html';
  }
  