    document.getElementById('quizForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let points = 0;
        // Calculate points based on selected answers
        // Example for question 1:
        if (document.querySelector('input[name="q1"]:checked').value === 'b') {
            points += 1;
        }
        // Add similar logic for other questions

        // Display total points or perform any other action
        alert("Total points: " + points);
    });
