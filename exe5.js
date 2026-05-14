const inputConvidadoEvento = document.getElementById('inputConvidadoEvento');
const listaConvidadosEvento = document.getElementById('listaConvidadosEvento');

function addTask() {

    const taskText = inputConvidadoEvento.value.trim();

    if (taskText !== '') {

        const newItem = document.createElement('li');

        newItem.innerHTML = `
        <span>${taskText}</span>

        <button onclick="editar(this)">Editar</button>
        <button onclick="delet(this)">Remover</button>
        <button onclick="completar(this)">Feito</button>
        `;

        listaConvidadosEvento.appendChild(newItem);

        inputConvidadoEvento.value = '';
    }
}

function completar(button) {

    const li = button.parentElement;

    li.classList.toggle('completed');
}

function delet(button) {

    const li = button.parentElement;

    li.remove();
}

function editar(button) {

    const li = button.parentElement;

    const span = li.querySelector('span');

    const novoTexto = prompt('Editar tarefa:', span.innerText);

    if (novoTexto !== null && novoTexto.trim() !== '') {

        span.innerText = novoTexto;
    }
}