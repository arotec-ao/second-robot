var speech = new SpeechSynthesisUtterance();
speech.volume = 3;
speech.pitch = .6;
speech.lang = "pt-PT";
speech.rate = 1.0;


function falar(texto) {
  speech.text = texto;
  speechSynthesis.cancel(); // Interrompe a fala atual
  speechSynthesis.speak(speech); // Inicia uma nova fala
}

var interval = null; // Variável para armazenar a referência do setInterval

  

function falarB(texto) {
  $(".boca").addClass('animb');
  speech.text = texto;
  speechSynthesis.cancel(); // Interrompe a fala atual
  speechSynthesis.speak(speech); // Inicia uma nova fala

  speech.onend = function() {
    $(".boca").removeClass('animb');
  };
}

interval = setInterval(() => {
  falarB("Aceitas um desafio? ?!!!?.?.?.?");
}, 10000); // A fala será repetida a cada 10 segundos
