<?php
$conexao = mysqli_connect("localhost","root","","bot");


if ($conexao) {
    $user_m = mysqli_real_escape_string($conexao, $_POST['messageValue']);

    $ins = "SELECT * FROM chatbot WHERE mensagem LIKE '%$user_m%'";
    $con = $conexao->query($ins);

    if (mysqli_num_rows($con) > 0) {
        $res = mysqli_fetch_assoc($con);
        echo $res['response'];
    }
    else {
        echo 1;
    }
}
else {
    echo "Desculpa, ocorreu um erro!";
}
?>