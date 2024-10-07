
    document.getElementById('salvar').addEventListener('click', function () {
    const contatoNome = document.getElementById('nome').value;
    const contatoTelefone = document.getElementById('telefone').value
   


    if (contatoNome && contatoTelefone ) {
        const li  = document.createElement('li')
        li.className = 'contatoitem'
        li.textContent = `${contatoNome} - Telefone: ${contatoTelefone}`
    
    const removeBotao = document.createElement('button')
    removeBotao.textContent = 'Remover'


  removeBotao.addEventListener('click', function() {
      li.remove()
    }) 
      
   


    li.appendChild(removeBotao)

    document.getElementById('lista').appendChild(li);
    document.getElementById('nome').value = '';//Irá limpar o campo de entrada
     document.getElementById('telefone').value = ''
    } else {
        alert('Por favor, digite dados para o contato!');
    }})


    