var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 5;
recognition.start();

recognition.onresult = function(event) {
	document.getElementById("result").innerHTML = event.results[0][0].transcript;
	document.getElementById("confidence").innerHTML = event.results[0][0].confidence;
};
