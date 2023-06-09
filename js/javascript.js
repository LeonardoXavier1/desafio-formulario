const cpfInput = document.getElementById("cpf");

cpfInput.addEventListener("input", function(event) {
  let cpf = event.target.value;
  
  // Remover todos os caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");
  
  // Aplicar a formatação do CPF
  let formattedCpf = "";
  for (let i = 0; i < cpf.length; i++) {
    if (i === 3 || i === 6) {
      formattedCpf += ".";
    } else if (i === 9) {
      formattedCpf += "-";
    }
    formattedCpf += cpf[i];
  }

  // Atualiza o campo com a formatação do CPF
  event.target.value = formattedCpf;
});

  document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const mensagem = document.getElementById('mensagem');

  

  
  //alerta 
  const div= document.createElement('div');
  div.classList.add('DIValert');
  const div2= document.createElement('div');
  div.classList.add('DIV2');
  const h4 = document.createElement('h4');
 


function retornaMSG(){
    window.location.href="index.html"
}





// Enviar os dados para o back usando o fetch
fetch('back.php', {
    method: 'POST',
    body: new FormData(document.querySelector('form'))
})
    .then(response => {
        if (response.ok) {
            return response.json();  // transforma em formato json a resposta
        } else {
            throw new Error('Error sending data.');
        }
    })
    .then(data => {
        const obj = Object.values(data)
        let temp = ``
        if (obj.includes("0")) {
if ((obj[0] == "0")&& (obj[2] == "0") && obj[4]=="0"){   //nome cpf email
    temp = obj[1] + `<br>` + obj[3] + `<br>` + obj [5] 
}           
 else if ((obj[2] == "0")&& (obj[4] == "0")){   //cpf email
    temp = obj[3] + `<br>` + obj[5] + `<br>`
}else if ((obj[0] == "0")&& (obj[4] == "0")){   //nome  email
    temp = obj[1] + `<br>` + + obj[5] + `<br>` 
}
else if ((obj[0] == "0")&& (obj[2] == "0")){   //nome cpf
    temp = obj[1] + `<br>` + obj[3] + `<br>`
}else if (obj[4] == "0"){
    temp = obj[5] + `<br>`   
}else if(obj[2] == "0") {    
    temp = obj[3] + `<br>`
}else if (obj[0] == "0"){
    temp = obj[1] + `<br>`}
console.log(temp);

            h4.innerHTML = temp

            
        } else {
            h4.innerHTML = `Cadastro efetuado com sucesso`
            }
            div2.appendChild(h4);
            div.appendChild(div2);
            document.body.appendChild(div);
            setTimeout(() => {
                retornaMSG();
            }, 5000);
       
    })
    .catch(error => {
        console.error('Error:', error);
    });})
       
  

    
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
