const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = signupForm['name'].value;
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log("Signup successful", userCredential.user);
    window.location.href ="Home.html"
    // You can redirect to a different page or perform other actions after successful signup
  } catch (error) {
    console.error("Signup failed", error.message);
    // Handle errors such as displaying an error message to the user
  }
});
 function loginred(){
  window.location.href ="index.html"
 }