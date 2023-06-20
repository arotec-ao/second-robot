var speech = new SpeechSynthesisUtterance();
speech.volume = 6;
speech.pitch = 0;
speech.lang = "pt-BR";
speech.rate = 1;

function falar(texto) {
  speech.text = texto;
  speechSynthesis.cancel(); // Interrompe a fala atual
  speechSynthesis.speak(speech); // Inicia uma nova fala
}

falar("Bem Vindo ao Angola Innoveshenn Sammit."); // Exemplo de chamada da função com texto fixo
var intervaloFalar = null; // Variável para armazenar a referência do setInterval
var interval = null; // Variável para armazenar a referência do setInterval

  
  function alternarDivs() {
    var cabecaDiv = document.querySelector('.cabeca');
    var qrcodeDiv = document.querySelector('.qrcode');
  
    // Verifica qual div está visível e alterna a exibição
    if (cabecaDiv.style.display === 'block') {
      cabecaDiv.style.display = 'none';
      qrcodeDiv.style.display = 'block';
      falar('Consulte aqui o programa do Evento');

      clearInterval(interval); // Cancela a execução do setInterval
     
      intervaloFalar = setInterval(() => {
        falar('Consulte aqui o programa do Evento');
      }, 6000);

      setTimeout(alternarDivs, 12000); // Chama a função novamente após 5 segundos
    
    } else {
      cabecaDiv.style.display = 'block';
      qrcodeDiv.style.display = 'none';

    clearInterval(intervaloFalar); // Cancela a execução do setInterval
      
        falar('Bem Vindo ao Angola Innoveshenn Sammit.');
    interval = setInterval(() => {
        falar('Bem Vindo ao Angola Innoveshenn Sammit.');
      }, 6000);

   
      setTimeout(alternarDivs, 15000); // Chama a função novamente após 15 segundos
    }
  }
  
  alternarDivs(); 