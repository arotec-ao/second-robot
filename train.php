<?php
$conexao = mysqli_connect("localhost","root","","bot");


if ($conexao) {
    $user_m = mysqli_real_escape_string($conexao, $_POST['msg']);
    $resposta = mysqli_real_escape_string($conexao, $_POST['res']);

    $ins = "INSERT INTO chatbot(mensagem, response) VALUES ('$user_m', '$resposta')";
    $con = $conexao->query($ins);

}
else {
    echo 1;
}
?>