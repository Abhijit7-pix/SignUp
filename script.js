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
  //auto fill gmail.com
  function handleEmailInput(event) {
    const emailInput = document.getElementById('email');
    const enteredEmail = emailInput.value.trim(); // Trim any whitespace
  
    // Check if the entered email ends with "@" symbol and the last character is not a backspace
    if (enteredEmail.endsWith('@') && event.inputType !== 'deleteContentBackward') {
        // Autofill the remaining part of the email
        emailInput.value = enteredEmail + 'gmail.com'; // Change 'gmail.com' to your desired default domain
    }
  }
  
  // Assuming 'email' is the ID of your email input field
  const emailInput = document.getElementById('email');
  emailInput.addEventListener('input', handleEmailInput);
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Sign in with email and password
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        document.getElementById('message').innerText = 'Login successful!';
        window.location.href ="Home.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById('message').innerText = errorMessage;
      });
  });
  // function redirect_sign() {
  //   window.location.href = 'signup.html'; // Change 'signup.html' to the URL of your signup page
  // }
