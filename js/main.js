var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 5;
recognition.start();

recognition.onresult = function(event) {
	var result = event.results[0][0].transcript;
	document.getElementById("result").innerHTML = result;
	document.getElementById("confidence").innerHTML = event.results[0][0].confidence;
	alert((spamWords.filter(x=>result.indexOf(word) !=1).length !== 0));
};

var spamWords = ['fortnight','viagra','can you help me'];
