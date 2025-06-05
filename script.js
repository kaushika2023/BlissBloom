document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('moodForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user's answers to each question
        const moodQuestion1 = getRadioValue('moodQuestion1');
        const moodQuestion2 = parseInt(getRadioValue('moodQuestion2'));
        const moodQuestion3 = getRadioValue('moodQuestion3');
        const moodQuestion4 = getRadioValue('moodQuestion4');
        const moodQuestion5 = getRadioValue('moodQuestion5');
        const moodQuestion6 = getRadioValue('moodQuestion6');
        const moodQuestion7 = getRadioValue('moodQuestion7');
        const moodQuestion8 = getRadioValue('moodQuestion8');
        const moodQuestion9 = getRadioValue('moodQuestion9');
        const moodQuestion10 = getRadioValue('moodQuestion10');

        // Generate result based on user's answers
        const result = generateResult(moodQuestion1, moodQuestion2, moodQuestion3, moodQuestion4, moodQuestion5, moodQuestion6, moodQuestion7, moodQuestion8, moodQuestion9, moodQuestion10);

        // Redirect to result page with the result as query parameter
        window.location.href = `result.html?result=${encodeURIComponent(result)}`;
    });
});

function getRadioValue(name) {
    const radios = document.getElementsByName(name);
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null; // If no radio button is selected
}

function generateResult(moodQuestion1, moodQuestion2, moodQuestion3, moodQuestion4, moodQuestion5, moodQuestion6, moodQuestion7, moodQuestion8, moodQuestion9, moodQuestion10) {
    let result = "";

    // Mood analysis based on user's answers to question 1
    if (moodQuestion1 === "Happy") {
        result += "It seems like you're feeling quite content today. ";
    } else if (moodQuestion1 === "Sad") {
        result += "You might be experiencing some emotional distress. ";
    } else if (moodQuestion1 === "Anxious") {
        result += "You're feeling a bit on edge. ";
    } else if (moodQuestion1 === "Stressed") {
        result += "You're under some pressure right now. ";
    } else if (moodQuestion1 === "Neutral") {
        result += "You're feeling fairly neutral today. ";
    }
    
    // Additional analysis based on user's answers to question 2
    if (moodQuestion2 === "High") {
        result += "Your stress levels seem to be quite high. ";
    } else if (moodQuestion2 === "Moderate") {
        result += "You're experiencing some moderate stress. ";
    } else if (moodQuestion2 === "Low") {
        result += "You're experiencing Low stress. ";
    }
    // Analysis based on user's answers to question 3
    if (moodQuestion3 === "Yes") {
        result += "You're dealing with physical symptoms related to stress or anxiety. ";
    }

    // Analysis based on user's answers to question 4
    if (moodQuestion4 === "Poor" || moodQuestion4 === "Very Poor") {
        result += "Your sleep quality has been quite low recently. ";
    }

    // Analysis based on user's answers to question 5
    if (moodQuestion5 === "Work") {
        result += "Work-related stressors are likely impacting your mood. ";
    } else if (moodQuestion5 === "Relationships") {
        result += "Challenges in your relationships may be affecting your emotional well-being. ";
    } else if (moodQuestion5 === "Health") {
        result += "Health concerns may be contributing to your mood. ";
    } else if (moodQuestion5 === "Finances") {
        result += "Financial worries may be adding to your stress. ";
    }

    // Additional analysis based on user's answers to question 6
    if (moodQuestion6 === "Daily") {
        result += "Regularly engaging in activities you enjoy can help uplift your mood. ";
    } else if (moodQuestion6 === "Never") {
        result += "You might benefit from incorporating more enjoyable activities into your routine. ";
    }
    // Analysis based on user's answers to question 7
    if (moodQuestion7 === "Optimistic") {
        result += "You have a positive outlook on the future. ";
    } else if (moodQuestion7 === "Pessimistic") {
        result += "You may be feeling uncertain or pessimistic about what lies ahead. ";
    }

    // Analysis based on user's answers to question 8
    if (moodQuestion8 === "Exercise") {
        result += "Engaging in physical activity can be a great way to manage stress. ";
    } else if (moodQuestion8 === "Talking to friends or family") {
        result += "Opening up to loved ones can provide valuable emotional support. ";
    } else if (moodQuestion8 === "Meditation or mindfulness") {
        result += "Practicing mindfulness techniques can help you stay grounded amidst challenges. ";
    } else if (moodQuestion8 === "Listening to music") {
        result += "Listening to music can be a soothing escape from stress. ";
    } else if (moodQuestion8 === "Reading") {
        result += "Immersing yourself in a good book can offer a temporary reprieve from worries. ";
    }

    // Analysis based on user's answers to question 9
    if (moodQuestion9 === "Yes") {
        result += "Having hobbies or interests that bring you joy is important for overall well-being. ";
    }

    // Analysis based on user's answers to question 10
    if (moodQuestion10 === "High") {
        result += "Your energy levels are quite high, which is fantastic for productivity and mood. ";
    } else if (moodQuestion10 === "Low") {
        result += "Low energy levels may be contributing to feelings of lethargy or fatigue. ";
    }

    return result;
}
