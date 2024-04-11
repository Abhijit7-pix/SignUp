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
const database = firebase.database();

// Function to fetch the latest score from Firebase and display it on the web page
function displayLatestScore() {
    // Get a reference to the scores node and order it by timestamp in descending order
    const scoresRef = database.ref('scores').orderByChild('timestamp').limitToLast(1);

    // Listen for changes in the scores node
    scoresRef.on('value', (snapshot) => {
        // Clear previous score
        document.getElementById('scoresContainer').innerHTML = '';

        // Check if there is any score data
        if (snapshot.exists()) {
            // Get the latest score data
            snapshot.forEach((childSnapshot) => {
                const latestScoreData = childSnapshot.val();
                const latestUserId = latestScoreData.userId;
                const latestScore = latestScoreData.score;
                const latestTimestamp = latestScoreData.timestamp;

                // Create HTML elements to display the latest score data
                const scoreElement = document.createElement('div');
                let scoreHTML = `<p>User ID: ${latestUserId}, Score: ${latestScore}`;
                
                // Add timestamp to HTML if it exists
                if (latestTimestamp !== undefined) {
                    scoreHTML += `, Timestamp: ${latestTimestamp}`;
                }

                scoreHTML += `</p>`;
                scoreElement.innerHTML = scoreHTML;

                // Append the score element to the scores container
                document.getElementById('scoresContainer').appendChild(scoreElement);
            });
        } else {
            // If there is no score data, display a message
            document.getElementById('scoresContainer').innerHTML = '<p>No scores available.</p>';
        }
    });
}

// Call the function to display the latest score
displayLatestScore();
