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
falarB(`Seja bem vindo ao Innovechenn sammit. 
        Quer fazer um jogo Comigo ?.?.?.?.?`);
}, 10000); // A fala será repetida a cada 10 segundos


// Array de perguntas e respostas
const questions = [
    {
        question: "      Em que ano foi que surgiu o primeiro computador eletrónico?",
        options: [1975, 1546, 1946, "Nenhuma das anteriores"],
        answer: 2
    },
    {
        question: "Em que ano foi a 1ª edição do A.i.S?",
        options: [2018, 2019, 2020, 2021, 2022],
        answer: 3
    },
    {
        question: "      Qual destes cientistas criou o telefone?",
        options: ["Albert Einstein","Alexander Graham Bell", "Isaac Newton", "Henry Ford",  "Elisha Grey"],
        answer: 1
    },
    {
        question: "     Qual é o maior país do mundo em área territorial?",
        options: ["Guiné", "Rússia", "China", "Estados Unidos", "R.D.C"],
        answer: 1
    },
    {
        question: "Qual é o elemento químico mais abundante no universo?",
        options: ["Enxofre", "Hidrogênio", "Oxigênio", "Carbono"],
        answer: 1
    },
   
];

let currentQuestion = 0; // Índice da pergunta atual

function mostrarRegras() {
    document.getElementsByClassName("p1")[0].style.display = "none";
    document.getElementById("rules-section").style.display = "block";

    falar(`Vamos as regras do jogo.
        Regra número 1. Não Vale Batota.
        Regra número 2. Não pode pesquisar a resposta na internet.
        Regra número 3. Se acertar todas as perguntas você vence o jogo.
        Se errar uma pergunta, você perde o jogo.
        Aceita o Desafio ?.?.?.?.? 
        Se sim, clique no botão abaixo!.
    `);
    clearInterval(interval);
}

function aceitarRegras() {
    document.getElementById("rules-section").style.display = "none";
    document.getElementById("game-section").style.display = "block";
    mostrarPergunta();
}

function mostrarPergunta() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        const questionSection = document.getElementById("game-section");
        questionSection.innerHTML = `
            <h2 class='text-center'>${question.question}</h2>
            <div class="answer-section">
                ${question.options.map((option, index) => `
                    <button onClick="verificarResposta(${index})" class="option-btn">${option}</button>
                `).join("")}
            </div>
        `;
        falar(question.question);
    } else {
        exibirVitoria();
    }
}


function verificarResposta(selectedOption) {
    const question = questions[currentQuestion];
    const selectedBtn = document.getElementsByClassName("option-btn")[selectedOption];

    if (selectedOption === question.answer) {
        // Resposta correta
        selectedBtn.style.backgroundColor = "green";
        selectedBtn.style.borderColor = "green";
        falar("Boa, resposta certa!")
        currentQuestion++;
        setTimeout(() => {
            mostrarPergunta();
        }, 3000);
    } else {
        // Resposta incorreta
        selectedBtn.style.backgroundColor = "red";
        selectedBtn.style.borderColor = "red";
        falar('Ôpah!! Resposta errada!')
        setTimeout(() => {
            falar(`Fim de jogo!
               Oh, que pena. Você foi derrotado por uma máquina.
                ...
            Até breve!
            `)
            exibirFimDeJogo();
        }, 3000);
    }
}

function exibirFimDeJogo() {
    const endSection = document.getElementById("end-section");
    endSection.innerHTML = `
    <center class='text-white'>
        <h2>Fim de Jogo!</h2>
        <p>Oh, que pena. Você foi derrotado por uma máquina.
           <br>
        Até breve!.</p>
    </center>
    `;
    document.getElementById("game-section").style.display = "none";
    document.getElementById("end-section").style.display = "block";
    setTimeout(function() {
      location.reload();
    }, 8000); // Recarrega a página após 5 segundos (5000 milissegundos)
}

function exibirVitoria() {
    const victorySection = document.getElementById("victory-section");
    victorySection.innerHTML = `
    <center class='text-white'>
        <h2>Parabéns!</h2>
        <p>Você é uma verdadeira máquina. Bom evento!</p>
    </center>
    `;
    falar(`Parabéns!, Você é uma verdadeira máquina.  Bom evento!`)
    document.getElementById("game-section").style.display = "none";
    document.getElementById("victory-section").style.display = "block";

    setTimeout(function() {
      location.reload();
    }, 8000); // Recarrega a página após 5 segundos (5000 milissegundos)
}

function reiniciarJogo() {
    currentQuestion = 0;
    document.getElementById("end-section").style.display = "none";
    document.getElementById("victory-section").style.display = "none";
    document.getElementById("restart-section").style.display = "none";
    document.getElementById("game-section").style.display = "block";
    mostrarPergunta();
}