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
