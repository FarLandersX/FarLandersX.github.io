// Connect to the WebSocket server
const socket = new WebSocket('ws://192.168.1.137:8080'); // Ensure this matches your server's address

// DOM elements
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');
const sendButton = document.getElementById('send-button');

// Handle WebSocket connection opening
socket.onopen = () => {
    console.log('WebSocket is connected.');
};

// Handle incoming messages from the WebSocket server
socket.onmessage = (event) => {
    const message = event.data;
    
    // Check if the message is a Blob, and convert it to text if so
    if (message instanceof Blob) {
        const reader = new FileReader();
        reader.onload = function () {
            displayMessage(reader.result, 'received');
        };
        reader.readAsText(message);  // Convert Blob to text
    } else {
        // If the message is a text, directly display it
        displayMessage(message, 'received');
    }
};

// Handle WebSocket errors
socket.onerror = (error) => {
    console.log('WebSocket Error: ', error);
};

// Handle WebSocket closure
socket.onclose = () => {
    console.log('WebSocket connection closed.');
};

// Emit message when the Send button is clicked
sendButton.onclick = () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.send(message); // Send the message as text to the WebSocket server
        displayMessage(message, 'sent'); // Display the message locally
        messageInput.value = ''; // Clear the input field
    }
};

// Function to display a message in the chat window
function displayMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    // Auto-scroll to the bottom of the messages
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Allow sending messages with the Enter key
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
