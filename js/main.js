window.onload = recognizeSpeech;

function recognizeSpeech() {
	var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
	recognition.lang = 'en-US';
	recognition.interimResults = false;
	recognition.maxAlternatives = 5;
	recognition.start();

	recognition.onresult = function(event) {
		var result = event.results[0][0].transcript;
		document.getElementById("result").innerHTML = result;
		document.getElementById("confidence").innerHTML = event.results[0][0].confidence;
		alert((spamWords.filter(word => result.indexOf(word) != -1).length === 0));
	};
	function spamCheck(str) {
		var spamWords = ['fortnight','viagra','can you help me','install','free','lol'];
		if (spamWords.filter(word => str.indexOf(word) != -1).length === 0) {
			if (word.)
		}
	}
}
