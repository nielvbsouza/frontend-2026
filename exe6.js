const pacotes = {
    standard: { nome: "Standard", preco: 50 },
    premium: { nome: "Premium", preco: 80 },
    deluxe: { nome: "Infinity Deluxe", preco: 120 }
};

document.getElementById("btnCalcularEvento").addEventListener("click", calcularOrcamento);

function calcularOrcamento() {
    const pacoteSelecionado = document.getElementById("selectPacoteEvento").value;
    const inputQtdPessoasEvento = parseInt(document.getElementById("inputQtdPessoasEvento").value);

    const resultadoDiv = document.getElementById("resultadoEventoFesta");
    const tabelaResumo = document.getElementById("tabelaResumoEvento");

    if (!pacoteSelecionado) {
        resultadoDiv.className = "resultado invalido";
        resultadoDiv.textContent = "⚠️ Por favor, selecione um pacote.";
        resultadoDiv.style.display = "block";
        tabelaResumo.style.display = "none";
        return;
    }

    if (!inputQtdPessoasEvento || isNaN(inputQtdPessoasEvento) || inputQtdPessoasEvento <= 0) {
        resultadoDiv.className = "resultado invalido";
        resultadoDiv.textContent = "⚠️ Informe uma quantidade válida de pessoas.";
        resultadoDiv.style.display = "block";
        tabelaResumo.style.display = "none";
        return;
    }

    const pacote = pacotes[pacoteSelecionado];

    const custoBruto = pacote.preco * inputQtdPessoasEvento;


    const taxaServico = custoBruto * 0.10;
    const totalComTaxa = custoBruto + taxaServico;


    const temDesconto = inputQtdPessoasEvento > 100;
    const desconto = temDesconto ? totalComTaxa * 0.05 : 0;
    const totalFinal = totalComTaxa - desconto;


    resultadoDiv.style.display = "none";

    document.getElementById("resultadoPacoteEvento").textContent = `${pacote.nome} — R$ ${pacote.preco.toFixed(2)}/pessoa`;
    document.getElementById("resultadoQtdEvento").textContent = `${inputQtdPessoasEvento} pessoa${inputQtdPessoasEvento > 1 ? "s" : ""}`;
    document.getElementById("resultadoCustoBrutoEvento").textContent = `R$ ${custoBruto.toFixed(2)}`;
    document.getElementById("resultadoTaxaServicoEvento").textContent = `R$ ${taxaServico.toFixed(2)}`;

    const linhaDescontoEvento = document.getElementById("linhaDescontoEvento");
    if (temDesconto) {
        linhaDescontoEvento.style.display = "";
        document.getElementById("resultadoDescontoEvento").textContent = `- R$ ${desconto.toFixed(2)}`;
    } else {
        linhaDescontoEvento.style.display = "none";
    }

    document.getElementById("resultadoTotalEvento").textContent = `R$ ${totalFinal.toFixed(2)}`;

    tabelaResumo.style.display = "table";
}