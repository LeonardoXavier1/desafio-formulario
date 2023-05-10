    <?php
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

$errors = array();
$fields = array('nome', 'email', 'cpf');

if (isset($_POST['nome'], $_POST['email'], $_POST['cpf'])) {
   if(($_POST['nome'] != "") && ($_POST['email'] != "" )&& ($_POST['cpf'] != "" )){
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $cpf = $_POST['cpf'];

    // Validar campo de email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "O email fornecido não é válido.";
    }

    // Validar campo de cpf
    $cpfValidationResult = CPFcalc($cpf);
    if ($cpfValidationResult !== true) {
        $errors[] = $cpfValidationResult;
    }

    // Validar campo de nome
    if (!preg_match('/^[a-zA-Z]{3,}$/', $nome)) {
        $errors[] = "O nome fornecido deve conter no mínimo 3 letras.";
    }

    if (empty($errors)) {
        echo "Todos os campos são válidos.";
    } else {
        echo "Erros encontrados:<br>";
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
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