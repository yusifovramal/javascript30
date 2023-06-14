// Create a new instance of SpeechRecognition
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

// Set properties
recognition.continuous = true
recognition.interimResults = true; // Show interim results
recognition.lang = 'en-US'; // Set language

// Get required DOM elements
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const outputText = document.getElementById('output-text');

// Event listener for start button
startBtn.addEventListener('click', () => {
    recognition.start(); // Start speech recognition
    startBtn.disabled = true; // Disable the start button
    startBtn.innerHTML = '<i class="fa-sharp fa-solid fa-microphone listening-animation"></i>';
});

stopBtn.addEventListener('click', () => {
    recognition.stop(); // Start speech recognition
});

// Event listener for speech recognition result
recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');

    outputText.innerText = transcript;

    outputText.scrollTop = outputText.scrollHeight;
});

// Event listener for speech recognition end
recognition.addEventListener('end', () => {
    startBtn.disabled = false; // Enable the start button
    startBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
});


const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    recognition.lang = selectedLanguage;
});
