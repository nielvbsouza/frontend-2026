
function validarCPF() {

    let cpf = document.getElementById("cpf").value;

    cpf = cpf.replace(/\D/g, '');

    const resultado = document.getElementById("resultadoCPF");

    if(cpf.length != 11){
        resultado.innerHTML = "CPF inválido";
        resultado.className = "resultado vermelho";
        return;
    }

    let soma = 0;
    let resto;

    for(let i = 1; i <= 9; i++){
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if(resto == 10 || resto == 11){
        resto = 0;
    }

    if(resto != parseInt(cpf.substring(9,10))){
        resultado.innerHTML = "CPF inválido";
        resultado.className = "resultado vermelho";
        return;
    }

    soma = 0;

    for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if(resto == 10 || resto == 11){
        resto = 0;
    }

    if(resto != parseInt(cpf.substring(10,11))){
        resultado.innerHTML = "CPF inválido";
        resultado.className = "resultado vermelho";
        return;
    }

    resultado.innerHTML = "CPF válido";
    resultado.className = "resultado verde";
}


const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", () => {

    let c = parseFloat(celsius.value);

    if(!isNaN(c)){
        fahrenheit.value = ((c * 9/5) + 32).toFixed(2);
    } else {
        fahrenheit.value = "";
    }

});

fahrenheit.addEventListener("input", () => {

    let f = parseFloat(fahrenheit.value);

    if(!isNaN(f)){
        celsius.value = ((f - 32) * 5/9).toFixed(2);
    } else {
        celsius.value = "";
    }

});


function calcularMedia(){

    let nome = document.getElementById("nomeAluno").value;

    let n1 = Number(document.getElementById("nota1").value);

    let n2 = Number(document.getElementById("nota2").value);

    let n3 = Number(document.getElementById("nota3").value);

    let media = (n1 + n2 + n3) / 3;

    let resultado = document.getElementById("resultadoMedia");

    if(media >= 7){

        resultado.innerHTML =
        `
        ${nome} está APROVADO <br>
        Média: ${media.toFixed(2)}
        `;

        resultado.className = "resultado azul";

    } else if(media >= 4){

        let falta = (10 - media).toFixed(2);

        resultado.innerHTML =
        `
        ${nome} está em EXAME <br>
        Média: ${media.toFixed(2)} <br>
        Falta ${falta} pontos para chegar em 10
        `;

        resultado.className = "resultado verde";

    } else {

        resultado.innerHTML =
        `
        ${nome} está REPROVADO <br>
        Média: ${media.toFixed(2)}
        `;

        resultado.className = "resultado vermelho";

    }

}


function calcularVenda(){

    let bandeira = document.getElementById("bandeira").value;

    let valor = Number(document.getElementById("valorVenda").value);

    let parcelas = Number(document.getElementById("parcelas").value);

    let taxa = 0;

    switch(bandeira){

        case "visa":
            taxa = 0.02;
        break;

        case "master":
            taxa = 0.0185;
        break;

        case "elo":
            taxa = 0.03;
        break;
    }

    let taxaBandeira = valor * taxa;

    let juros = valor * (0.0035 * parcelas);

    let taxaMensal = 12.50 * parcelas;

    let total = valor + taxaBandeira + juros + taxaMensal;

    let valorParcela = total / parcelas;

    let resultado = document.getElementById("resultadoBanco");

    resultado.innerHTML =
    `
    Taxa da Bandeira: R$ ${taxaBandeira.toFixed(2)} <br>
    Juros: R$ ${juros.toFixed(2)} <br>
    Taxa Mensal: R$ ${taxaMensal.toFixed(2)} <br>
    Valor Total: R$ ${total.toFixed(2)} <br>
    Valor da Parcela: R$ ${valorParcela.toFixed(2)}
    `;

    resultado.className = "resultado azul";

}