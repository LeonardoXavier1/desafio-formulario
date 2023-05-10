<?php
header('Content-Type: application/json');

function CPFcalc($cpf) {
    $cpf = preg_replace('/[^0-9]/', '', $cpf);
    if (strlen($cpf) != 11) {
        return "O CPF deve conter exatamente 11 dígitos.";
    }
    for ($t = 9; $t < 11; $t++) {
        for ($d = 0, $c = 0; $c < $t; $c++) {
            $d += $cpf[$c] * (($t + 1) - $c);
        }
        $d = ((10 * $d) % 11) % 10;
        if ($cpf[$c] != $d) {
            return "O CPF fornecido não é válido.";
        }
    }
    return true;
}



$cpfErro="";
$nomeErro="";
$emailErro ="";



if (isset($_POST["nome"], $_POST["email"], $_POST["cpf"])) {
    if ($_POST["nome"] != "" && $_POST["email"] != "" && $_POST["cpf"] != "") {
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $cpf = $_POST["cpf"];

        // Validar campo de email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErro = "O email fornecido não é válido.";
                $email = "0";
        }else {
            $emailErro = "Válido";
        }

        // Validar campo de cpf
        $cpfValidationResult = CPFcalc($cpf);
        if ($cpfValidationResult !== true) {
           $cpfErro = $cpfValidationResult;
           $cpf = "0";
        } else {
            $cpfErro= "Válido";
        }

        // Validar campo de nome
        if (!preg_match('/^[a-zA-Z]{3,}$/', $nome)) {
            $nomeErro = "O Nome deve conter 3 letras ou mais.";
            $nome = "0";
        }else {
            $nomeErro = "Válido";
        
        }



        $aux = json_encode(array(
        "nome" => $nome,
        "nomeE" => $nomeErro,
        "cpf" => $cpf,
        "cpfE" => $cpfErro,
        "email" => $email,
        "emailE" => $emailErro,
        )
        
        );

        echo $aux;

        }
    }







// function CPFcalc($cpf) {
//     $cpf = preg_replace('/[^0-9]/', '', $cpf);
//     if (strlen($cpf) != 11) {
//         return false;
//     }
//     for ($t = 9; $t < 11; $t++) {
//         for ($d = 0, $c = 0; $c < $t; $c++) {
//             $d += $cpf[$c] * (($t + 1) - $c);
//         }
//         $d = ((10 * $d) % 11) % 10;
//         if ($cpf[$c] != $d) {
//             return false;
//         }
//     }
//     return true;
// }
    
// if(isset($_POST['nome'],$_POST['email'],$_POST['cpf'])){
//     $nome = $_POST['nome'];
//     $email = $_POST['email'];
//     $cpf = $_POST['cpf'];
    
//     // Validar campo vazio
//     if($email == "" || $cpf == "" || $nome == ""){
//         echo "Campos vazios";
//     } else {
//         // Validar campo de email
//         if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
//             echo "O email fornecido não é válido.";
//         } else {
//             // Validar campo de cpf
//             if(!CPFcalc($cpf)){
//                 echo "O CPF fornecido não é válido.";
//             } else {
//                 // Validar campo de nome
//                 if(!preg_match('/^[a-zA-Z]{3,}$/', $nome)){
//                     echo "O nome fornecido deve conter no mínimo 3 letras.";
//                 } else {
//                     echo "Todos os campos são válidos.";
//                 }
//             }
//         }
//     }
// }