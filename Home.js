
//logout portion
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

//cardview portion
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

// Check if user is authenticated
firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
        // User is signed in
        try {
            // Fetch user data from Firebase Realtime Database
            const userDataSnapshot = await firebase.database().ref('users/' + user.uid).once('value');
            const userData = userDataSnapshot.val();
            
            // Get user name and email
            const userName = userData.name || "No name provided";
            const userEmail = user.email || "No email provided";

            // Update HTML content to display user data
            document.getElementById('user-name').innerText = userName;
            document.getElementById('user-email').innerText = userEmail;

            // Get a reference to the scores node for the current user
            const userScoresRef = firebase.database().ref('scores').orderByChild('userId').equalTo(user.uid).limitToLast(1);

            // Listen for changes in the scores node for the current user
            userScoresRef.on('value', (snapshot) => {
                // Clear previous score
                document.getElementById('scoresContainer').innerHTML = '';

                // Check if there is any score data for the current user
                if (snapshot.exists()) {
                    // Get the latest score data for the current user
                    snapshot.forEach((childSnapshot) => {
                        const latestScoreData = childSnapshot.val();
                        const latestScore = latestScoreData.score;
                        const latestTimestamp = latestScoreData.timestamp;

                        // Create HTML elements to display the latest score data for the current user
                        const scoreElement = document.createElement('div');
                        let scoreHTML = `<p>Your latest score: ${latestScore}`;

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
                    // If there is no score data for the current user, display a message
                    document.getElementById('scoresContainer').innerHTML = '<p>No scores available for you.</p>';
                }
            });
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    } else {
        // User is signed out, redirect to login page
        window.location.href = "index.html";
    }
});





// work for name and mail
// // Check if user is authenticated
// // Check if user is authenticated
// firebase.auth().onAuthStateChanged(async (user) => {
//     if (user) {
//         // User is signed in
//         try {
//             // Fetch user data from Firebase Realtime Database
//             const userDataSnapshot = await firebase.database().ref('users/' + user.uid).once('value');
//             const userData = userDataSnapshot.val();
            
//             // Get user name and email
//             const userName = userData.name || "No name provided";
//             const userEmail = user.email || "No email provided";

//             // Update HTML content to display user data
//             document.getElementById('user-name').innerText = userName;
//             document.getElementById('user-email').innerText = userEmail;
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     } else {
//         // User is signed out, redirect to login page
//         window.location.href = "index.html";
//     }
// });

// firebase.auth().onAuthStateChanged(async (user) => {
//     if (user) {
//         // User is signed in
//         try {
//             // Fetch user data from Firebase Authentication
//             const userName = user.displayName || "No name provided";
//             const userEmail = user.email || "No email provided";

//             // Update HTML content to display user data
//             document.getElementById('user-name').innerText = userName;
//             document.getElementById('user-email').innerText = userEmail;

//             // Get a reference to the scores node for the current user
//             const userScoresRef = firebase.database().ref('scores').orderByChild('userId').equalTo(user.uid).limitToLast(1);

//             // Listen for changes in the scores node for the current user
//             userScoresRef.on('value', (snapshot) => {
//                 // Clear previous score
//                 document.getElementById('scoresContainer').innerHTML = '';

//                 // Check if there is any score data for the current user
//                 if (snapshot.exists()) {
//                     // Get the latest score data for the current user
//                     snapshot.forEach((childSnapshot) => {
//                         const latestScoreData = childSnapshot.val();
//                         const latestScore = latestScoreData.score;
//                         const latestTimestamp = latestScoreData.timestamp;

//                         // Create HTML elements to display the latest score data for the current user
//                         const scoreElement = document.createElement('div');
//                         let scoreHTML = `<p>Your latest score: ${latestScore}`;

//                         // Add timestamp to HTML if it exists
//                         if (latestTimestamp !== undefined) {
//                             scoreHTML += `, Timestamp: ${latestTimestamp}`;
//                         }

//                         scoreHTML += `</p>`;
//                         scoreElement.innerHTML = scoreHTML;

//                         // Append the score element to the scores container
//                         document.getElementById('scoresContainer').appendChild(scoreElement);
//                     });
//                 } else {
//                     // If there is no score data for the current user, display a message
//                     document.getElementById('scoresContainer').innerHTML = '<p>No scores available for you.</p>';
//                 }
//             });
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     } else {
//         // User is signed out, redirect to login page
//         window.location.href = "index.html";
//     }
// });

// // Check if scoresContainer element is found
// const scoresContainer = document.getElementById('scoresContainer');
// console.log("scoresContainer:", scoresContainer);
// if (!scoresContainer) {
//     console.error("Error: scoresContainer element not found!");
// }





// // Check if user is authenticated
// firebase.auth().onAuthStateChanged(async (user) => {
//     if (user) {
//         // User is signed in
//         try {
//             // Fetch user data from Firebase Authentication
//             const userName = user.displayName || "No name provided";
//             const userEmail = user.email || "No email provided";

//             // Update HTML content to display user data
//             document.getElementById('user-name').innerText = userName;
//             document.getElementById('user-email').innerText = userEmail;
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     } else {
//         // User is signed out, redirect to login page
//         window.location.href = "index.html";
//     }
// });

 


// // Function to fetch and display the latest score for the current user
// function displayLatestScoreForCurrentUser() {
//     // Get the current user's ID from Firebase Authentication
//     const currentUser = firebase.auth().currentUser;

//     if (currentUser) {
//         const userId = currentUser.uid;

//         // Get a reference to the scores node for the current user and order it by timestamp in descending order
//         const userScoresRef = firebase.database().ref('scores').orderByChild('userId').equalTo(userId).limitToLast(1);

//         // Listen for changes in the scores node for the current user
//         userScoresRef.on('value', (snapshot) => {
//             // Clear previous score
//             document.getElementById('scoresContainer').innerHTML = '';

//             // Check if there is any score data for the current user
//             if (snapshot.exists()) {
//                 // Get the latest score data for the current user
//                 snapshot.forEach((childSnapshot) => {
//                     const latestScoreData = childSnapshot.val();
//                     const latestScore = latestScoreData.score;
//                     const latestTimestamp = latestScoreData.timestamp;

//                     // Create HTML elements to display the latest score data for the current user
//                     const scoreElement = document.createElement('div');
//                     let scoreHTML = `<p>Your latest score: ${latestScore}`;

//                     // Add timestamp to HTML if it exists
//                     if (latestTimestamp !== undefined) {
//                         scoreHTML += `, Timestamp: ${latestTimestamp}`;
//                     }

//                     scoreHTML += `</p>`;
//                     scoreElement.innerHTML = scoreHTML;

//                     // Append the score element to the scores container
//                     document.getElementById('scoresContainer').appendChild(scoreElement);
//                 });
//             } else {
//                 // If there is no score data for the current user, display a message
//                 document.getElementById('scoresContainer').innerHTML = '<p>No scores available for you.</p>';
//             }
//         });
//     } else {
//         // If no user is authenticated, display a message
//         document.getElementById('scoresContainer').innerHTML = '<p>Please log in to see your scores.</p>';
//     }
// }

// // Call the function to display the latest score for the current user
// displayLatestScoreForCurrentUser();
// start of show score
// end of cardview
// // Function to fetch and display the latest score for the current user
// function displayLatestScoreForCurrentUser() {
//     // Get the current user's ID from Firebase Authentication
//     const currentUser = firebase.auth().currentUser;

//     if (currentUser) {
//         const userId = currentUser.uid;

//         // Get a reference to the scores node for the current user and order it by timestamp in descending order
//         const userScoresRef = database.ref('scores').orderByChild('userId').equalTo(userId).limitToLast(1);

//         // Listen for changes in the scores node for the current user
//         userScoresRef.on('value', (snapshot) => {
//             // Clear previous score
//             document.getElementById('scoresContainer').innerHTML = '';

//             // Check if there is any score data for the current user
//             if (snapshot.exists()) {
//                 // Get the latest score data for the current user
//                 snapshot.forEach((childSnapshot) => {
//                     const latestScoreData = childSnapshot.val();
//                     const latestScore = latestScoreData.score;
//                     const latestTimestamp = latestScoreData.timestamp;

//                     // Create HTML elements to display the latest score data for the current user
//                     const scoreElement = document.createElement('div');
//                     let scoreHTML = `<p>Your latest score: ${latestScore}`;

//                     // Add timestamp to HTML if it exists
//                     if (latestTimestamp !== undefined) {
//                         scoreHTML += `, Timestamp: ${latestTimestamp}`;
//                     }

//                     scoreHTML += `</p>`;
//                     scoreElement.innerHTML = scoreHTML;

//                     // Append the score element to the scores container
//                     document.getElementById('scoresContainer').appendChild(scoreElement);
//                 });
//             } else {
//                 // If there is no score data for the current user, display a message
//                 document.getElementById('scoresContainer').innerHTML = '<p>No scores available for you.</p>';
//             }
//         });
//     } else {
//         // If no user is authenticated, display a message
//         document.getElementById('scoresContainer').innerHTML = '<p>Please log in to see your scores.</p>';
//     }
// }

// // Call the function to display the latest score for the current user
// displayLatestScoreForCurrentUser();
// end of show score

//  database = firebase.database();

// // Fconstunction to fetch the latest score from Firebase and display it on the web page
// function displayLatestScore() {
//     // Get a reference to the scores node and order it by timestamp in descending order
//     const scoresRef = database.ref('scores').orderByChild('timestamp').limitToLast(1);

//     // Listen for changes in the scores node
//     scoresRef.on('value', (snapshot) => {
//         // Clear previous score
//         document.getElementById('scoresContainer').innerHTML = '';

//         // Check if there is any score data
//         if (snapshot.exists()) {
//             // Get the latest score data
//             snapshot.forEach((childSnapshot) => {
//                 const latestScoreData = childSnapshot.val();
//                 const latestUserId = latestScoreData.userId;
//                 const latestScore = latestScoreData.score;
//                 const latestTimestamp = latestScoreData.timestamp;

//                 // Create HTML elements to display the latest score data
//                 const scoreElement = document.createElement('div');
//                 let scoreHTML = `<p>User ID: ${latestUserId}, Score: ${latestScore}`;
                
//                 // Add timestamp to HTML if it exists
//                 if (latestTimestamp !== undefined) {
//                     scoreHTML += `, Timestamp: ${latestTimestamp}`;
//                 }

//                 scoreHTML += `</p>`;
//                 scoreElement.innerHTML = scoreHTML;

//                 // Append the score element to the scores container
//                 document.getElementById('scoresContainer').appendChild(scoreElement);
//             });
//         } else {
//             // If there is no score data, display a message
//             document.getElementById('scoresContainer').innerHTML = '<p>No scores available.</p>';
//         }
//     });
// }

// // Call the function to display the latest score
// displayLatestScore();
