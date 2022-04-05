//quer dizer que, ao clicar no botão submit(Calcular),
//execute a função criada em cima, por isso é usado o addElementListener.

function calculateTip (event) {
    event.preventDefault(); //ele evita de carregar a página;
    let contagem = document.getElementById('conta').value;
    let servicos = document.getElementById('service').value;
    let numeroPessoas = document.getElementById('people').value;

    if ( contagem == '' | servicos == 0) {
        alert('Por favor preencha os campos indicados.');
        return;
    }

    if(numeroPessoas == '' | numeroPessoas <= 1) {
        numeroPessoas = 1; //se numeroPessoas for VAZIO ou MENOR OU IGUAL A 1, ele vai passar a ter o valor 1.
        document.getElementById('each').style.display='none'; // essa parte não vai aparecer na tela se o valor for menor que 1;
    } else {
        document.getElementById('each').style.display='block';// o ID correspondente aparece na tela.
    }

    let total = (contagem * servicos) / numeroPessoas;
    total = total.toFixed(2);       //aqui ele vai pegar o total( valor da conta de contagem x servicos e depois divido pelo numero de pessoas)
    document.getElementById('tip').innerHTML = total;  //e se tiver numero decimal, só irá mostrar na tela duas casas decimais depos da vírgula.
    document.getElementById('total').style.display="block";//o innerHTML ele inseri um conteúdo HTML no documento;

}

document.getElementById('total').style.display="none";
document.getElementById('each').style.display="none";
document.getElementById('tipeForm').addEventListener('submit', calculateTip);

//importante a criação de ID no documento html para interação com o JS;
//no momento em que crio uma função, dentro com escopo de bloco, eu crio LETS armanzenando o VALOR que está dentro dos INPUT, ou seja
//no momento em que o usuário coloca valores dentro dos input, esses valores eu armazeno dentro de umaq variável LET para poder manipular aquele valor.