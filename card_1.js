
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

    const firebase = require('firebase/app');
    require('firebase/auth');
    require('firebase/firestore');
    
    // Initialize Firebase with your configuration
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    // Function to store score
    function storeScore(score) {
      const db = firebase.firestore();
      const user = firebase.auth().currentUser;
    
      if (user) {
        // User is signed in.
        const userId = user.uid;
    
        // Reference to the document for the user
        const userRef = db.collection('users').doc(userId);
    
        // Update the score field in the document
        userRef.update({
          score: score
        })
        .then(() => {
          console.log("Score stored successfully!");
        })
        .catch((error) => {
          console.error("Error storing score: ", error);
        });
      } else {
        // No user is signed in.
        console.error("No user signed in.");
      }
    }
    
    // Usage example
    // Sample points
    const score = points; // Store the total points as the score
    storeScore(score);
    


});



