<?php


//1 – Definimos Para quem vai ser enviado o email
/*$para = "saramendes_98@hotmail.com";
mail($para, $escolha, $instituicao, $descricao);  //função que faz o envio do email.*/

//2 - resgatar o nome digitado no formulário e  grava na variavel $nome

//$filename = 'data.txt';

$nome = $_POST['nome'];
$email = $_POST['email'];
$data = $_POST['data'];
$hora = $_POST['hora'];
$local = $_POST['local'];
$coordenadas = $_POST['coordenadas'];
$equipamento = $_POST['equipamento'];
$subcategoria = $_POST['subcategoria'];
$addCat = $_POST['addCat'];
$descricao = $_POST['descricao'];
$file = $_POST['file'];


mailOutputForm($nome , $email, $data, $hora, $local, $coordenadas, $equipamento, $subcategoria, $addCat, $descricao, $file);


function mailOutputForm($nome , $email, $data, $hora, $local, $coordenadas, $equipamento, $subcategoria, $addCat, $descricao, $file)
{

    $mensagem = "Chegou um novo som. 
   
NOVO SOM

Secção a que pertence: $escolha
Instituição sugerida: $instituicao
Descrição: $descricao

Author's name: $nome
E-mail: $email
Recording date: $data
Recording time: $hora
Location of the recording: $local
Recording coordinates: $coordenadas
Equipment used: $equipamento
Categories and subcategories: $subcategoria
Keywords: $addCat
Description: $descricao
Audio: $file
 
    ";

    mail('saramendes_98@hotmail.com',
        'Nova Som',
        $mensagem,
        'From: 	saramendes@student.dei.uc.pt');

}

  header("Location: getInvolved.html");



?>
