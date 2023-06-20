<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aro Bot</title>
    <script src="jquery.js"></script>
    <script src="jquery.min.js"></script>
    <link rel="stylesheet" href="bot.css">
    
</head>
<body>
    <div class="container">
        <img src="icone.png" height="50em" alt="" class="icon">
        <div id="dot1"></div>
        <div id="dot2"></div>

        <div id="screen">
            <div class="header"> <div class="activo"></div> ARO-BOT</div>
            <div id="messageDisplaySection">
                
            </div>
            <!-- campo de texto -->
            <div id="userInput">
                <input type="text" name="messages" id="messages" autocapitalize="none" autocomplete="OFF" placeholder="Escreva sua mensagem..." required>
                <input type="submit" value="Enviar" id="send" name="send">
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function () {

            $("#messages").on("keyup", function () {
                if ($("#messages").val()) {
                $("#send").css("display","block");
                $("#send").css("transition",".3s");
            }
            else{
                $("#send").css("display","none");
                $("#send").css("transition",".3s");
            }
            });
        });

        //evento ao clicar no botao enviar

        $("#send").click(function (e) {
            $userMessage = $("#messages").val();
            $criarMsg = "<div class='chat userMessages'>"+ $userMessage +"</div>";
            $("#messageDisplaySection").append($criarMsg);

            $.ajax({
                url: "db_bot.php",
                type: "POST",
                data: {messageValue: $userMessage},
                success: function (resposta) {
                       
                        if (resposta == 1) {
                            var sem_resposta ="Desculpa, não tenho resposta para isto infelizmente, qual seria a resposta certa?";
                            $botResposta = "<div class='chat botMessages'>"+ sem_resposta +"</div>";
                            $("#messageDisplaySection").append($botResposta);
                            speak(sem_resposta);
                            setTimeout(() => {
                               var res = prompt("Por favor digite a resposta certa aqui", "por favor");
                                
                               if (res != "") {
                                $.ajax({
                                url: "train.php",
                                type: "POST",
                                data: {msg: $userMessage, res: res},
                                success: function (re, s) {
                                    if (re == 1) {
                                    alert("sua resposta foi adicionada com sucesso");
                                    }
                                    else{
                                        alert("Desculpa ocorreu um erro ao tentar gravar sua resposta!");
                                    }
                                }
                                });
                               }
                               else{
                                alert("voce não digitou nada de nada e sua mensagem foi"+ $userMessage );
                               }
                            }, 5200);
                        }
                        else{
                            $botResposta = "<div class='chat botMessages'>"+ resposta +"</div>";
                            $("#messageDisplaySection").append($botResposta);
                            speak(resposta);
                        }
                }
            });
                $("#messages").val("");
                $("#send").css("display","none");

        });


        function speak(voice) {
            const speech = new SpeechSynthesisUtterance();
            speech.text = voice;
            speech.volume = 2;
            speech.rate = 1;
            speechSynthesis.speak(speech);

        }



    </script>
</body>
</html>