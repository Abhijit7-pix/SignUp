const signupForm = document.getElementById('signup-form');




// // Function to handle email input  (auto insert but one error)
// function handleEmailInput() {
//   const emailInput = document.getElementById('email');
//   const enteredEmail = emailInput.value.trim(); // Trim any whitespace

//   // Check if the entered email ends with "@" symbol
//   if (enteredEmail.endsWith('@')) {
//       // Autofill the remaining part of the email
//       emailInput.value = enteredEmail + 'gmail.com'; // Change 'gmail.com' to your desired default domain
//   }
// }

// // Assuming 'email' is the ID of your email input field
// const emailInput = document.getElementById('email');
// emailInput.addEventListener('input', handleEmailInput);
// Function to handle email input
// as per require
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






signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = signupForm['name'].value;
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

// Inside the signup success block
try {
  const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
  console.log("Signup successful", userCredential.user);

  // Save user data to Realtime Database
  await firebase.database().ref('users/' + userCredential.user.uid).set({
      name: name,
      email: email
      // Add other user data if needed
  });

  window.location.href = "Home.html";
} catch (error) {
  console.error("Signup failed", error.message);
  // Handle errors
}
});
//   try {
//     const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
//     console.log("Signup successful", userCredential.user);
//     window.location.href ="Home.html"
//     // You can redirect to a different page or perform other actions after successful signup
//   } catch (error) {
//     console.error("Signup failed", error.message);
//     // Handle errors such as displaying an error message to the user
//   }
// });



// not in use
//  function loginred(){
//   window.location.href ="index.html"
//  
