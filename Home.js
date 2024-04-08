const logoutButton = document.getElementById('logout-btn');

logoutButton.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('User signed out');
        window.location.href ="index.html"
        // Redirect or perform any other action after logout
    }).catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
    });
});
document.getElementById('card-1').addEventListener('click', handleCard_1);
document.getElementById('card-2').addEventListener('click', handleCard_2);
document.getElementById('card-3').addEventListener('click', handleCard_3);
document.getElementById('card-4').addEventListener('click', handleCard_4);
// function handleCard_1(){
//     document.getElementById('message').innerText = 'Click 1  successful!';
//         alert("You clicked on Card 1");
      
      
// }
function handleCard_1() {
    window.location.href ="card_view_1.html";
}
function handleCard_2(){
    window.location.href ="card_view_2.html";

      
}
function handleCard_3(){
    window.location.href ="card_view_3.html";

      
      
}
function handleCard_4(){
    window.location.href ="card_view_4.html";

      
      
}