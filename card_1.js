
// Dynamically create quiz form
const form = document.getElementById('quizForm');

quizData.forEach((questionData, index) => {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = questionData.category;
    fieldset.appendChild(legend);

    const questionParagraph = document.createElement('p');
    questionParagraph.textContent = questionData.question;
    fieldset.appendChild(questionParagraph);

    questionData.options.forEach(option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'q' + index;
        radio.value = option.isCorrect.toString(); // Set value to true/false
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option.text));
        fieldset.appendChild(label);
        fieldset.appendChild(document.createElement('br'));
    });

    form.insertBefore(fieldset, form.lastElementChild);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let points = 0;

    // Calculate points based on selected answers
    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector('input[name="q' + index + '"]:checked');
        if (selectedOption && selectedOption.value === 'true') {
            points++;
        }
    });

    // Display total points or perform any other action
    alert("Total points: " + points);

    // After calculating the points, store score to Firebase
    const userId = "user123"; // Replace with actual user ID
    const score = points; // Store the total points as the score
    storeScore(userId, score);
});

// Function to store score to Firebase Realtime Database
function storeScore(userId, score) {
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

    const database = firebase.database();

    // Get a reference to the scores node
    const scoresRef = database.ref('scores');
    
    // Push a new score object to the scores node
    scoresRef.push({
        userId: userId,
        score: score,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    }).then(() => {
        console.log("Score stored successfully!");
    }).catch((error) => {
        console.error("Error storing score: ", error);
    });
}
// const database = firebase.database();

// // Function to update a stored score
// function updateScore(scoreId, newScore) {
//     // Get a reference to the specific score node
//     const scoreRef = database.ref('scores/' + scoreId);

//     // Update the score value
//     scoreRef.update({
//         score: newScore
//     }).then(() => {
//         console.log("Score updated successfully!");
//     }).catch((error) => {
//         console.error("Error updating score: ", error);
//     });
// }

// // Example usage
// const scoreId = "-MjhlRukm87TK12yFqVg"; // Replace with the ID of the score you want to update
// const newScore = 20; // Replace with the new score value
// updateScore(scoreId, newScore);
    

//     const form = document.getElementById('quizForm');

//     quizData.forEach((questionData, index) => {
//         const fieldset = document.createElement('fieldset');
//         const legend = document.createElement('legend');
//         legend.textContent = questionData.category;
//         fieldset.appendChild(legend);

//         const questionParagraph = document.createElement('p');
//         questionParagraph.textContent = questionData.question;
//         fieldset.appendChild(questionParagraph);

//         questionData.options.forEach(option => {
//             const label = document.createElement('label');
//             const radio = document.createElement('input');
//             radio.type = 'radio';
//             radio.name = 'q' + index;
//             radio.value = option.isCorrect.toString(); // Set value to true/false
//             label.appendChild(radio);
//             label.appendChild(document.createTextNode(option.text));
//             fieldset.appendChild(label);
//             fieldset.appendChild(document.createElement('br'));
//         });

//         form.insertBefore(fieldset, form.lastElementChild);
//     });

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         let points = 0;

//         // Calculate points based on selected answers
//         quizData.forEach((questionData, index) => {
//             const selectedOption = document.querySelector('input[name="q' + index + '"]:checked');
//             if (selectedOption && selectedOption.value === 'true') {
//                 points++;
//             }
//         });

//         // Display total points or perform any other action
//         alert("Total points: " + points);
//     });
//     const database = firebase.database();

//   // Function to store score to Firebase Realtime Database
//   function storeScore(userId, score) {
//     // Get a reference to the scores node
//     const scoresRef = database.ref('scores');
    
//     // Push a new score object to the scores node
//     scoresRef.push({
//       userId: userId,
//       score: score,
//       timestamp: firebase.database.ServerValue.TIMESTAMP
//     }).then(() => {
//       console.log("Score stored successfully!");
//     }).catch((error) => {
//       console.error("Error storing score: ", error);
//     });
//   }

//   // Example usage
//   const userId = "user123"; // Replace with actual user ID
//   const score = 10; // Replace with actual score
//   storeScore(userId, score);;