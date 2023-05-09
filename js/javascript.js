function enviarDados(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const submitBtn = document.getElementById('submitBtn');
  
    // Verificar se os campos foram preenchidos corretamente
    if (nome === '' || email === '' || cpf === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Validar o CPF
    if (!validarCPF(cpf)) {
      alert('CPF inválido. Por favor, verifique o CPF informado.');
      return;
    }
  
    // Enviar os dados para o servidor usando o fetch
    fetch('back.php', {
      method: 'POST',
      body: FormData
    })
    .then(response => {
      if (response.ok) {
        // Se a resposta do servidor foi OK, mostrar mensagem de sucesso
        alert('Dados enviados com sucesso!');
        // Ou fazer alguma outra coisa, como redirecionar o usuário
      } else {
        // Se a resposta do servidor não foi OK, mostrar mensagem de erro
        alert('Erro ao enviar dados.');
      }
    })
    .catch(error => {
      // Se houve algum erro no fetch, mostrar mensagem de erro
      alert('Erro no fetch: ' + error.message);
    });
  }
  
  function validarCPF(cpf) {
    // Implemente aqui a lógica de validação do CPF
    // ...
    return true; // Retorne true se o CPF for válido, caso contrário, retorne false
  }
  



// function exibirMensagem(mensagem) {
//     const mensagemElement = document.getElementById('mensagem');
//     mensagemElement.textContent = mensagem;
//   }

//   submitBtn.addEventListener('click', function() {
//     const nomeValor = nome.value;
//     const emailValor = email.value;
//     const cpfValor = cpf.value;
  
//     // Validar campos e exibir mensagem correspondente
//     if (nomeValor === '' || emailValor === '' || cpfValor === '') {
//       exibirMensagem('Campos vazios');
//     } else {
//       // Outras validações e lógica aqui
//       exibirMensagem('Formulário enviado com sucesso');
//     }
//   });

//   fetch('back.php', {
//     method: 'POST',
//     body: FormData
//   })
//   .then(response => {
//     if (response.ok) {
//       // Se a resposta do servidor foi OK, mostrar mensagem de sucesso
//       alert('Dados enviados com sucesso!');
//       // Ou fazer alguma outra coisa, como redirecionar o usuário
//     } else {
//       // Se a resposta do servidor não foi OK, mostrar mensagem de erro
//       alert('Erro ao enviar dados.');
//     }
//   })
//   .catch(error => {
//     // Se houve algum erro no fetch, mostrar mensagem de erro
//     alert('Erro no fetch: ' + error.message);
//   });




  
