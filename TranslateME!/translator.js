async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");

    if (inputText.trim() === "") {
        outputText.textContent = "Please enter some text.";
        return;
    }

    const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: inputText,
            sourceLang: 'en',
            targetLang: 'ja'
        })
    });

    const data = await response.json();
    if (data.translatedText) {
        outputText.textContent = data.translatedText;
    } else {
        outputText.textContent = 'Translation failed.';
    }
}
