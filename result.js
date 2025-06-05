document.addEventListener('DOMContentLoaded', function() {
    const resultText = document.getElementById('resultText');

    // Get the result from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const result = urlParams.get('result');

    // Display the result on the page
    if (result) {
        resultText.textContent = decodeURIComponent(result);
    } else {
        resultText.textContent = "No result found.";
    }
});
