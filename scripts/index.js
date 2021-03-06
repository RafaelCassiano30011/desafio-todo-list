import listaDeTarefas from './dados/dados.js'

const $buttonBox = document.querySelector('.button-box')
const $buttonNovaTarefa = document.querySelector('.button-nova-tarefa')

const $tarefaEmbrulho = document.querySelector('.tarefas-embrulho')
const $boxTarefas = document.querySelector('.box-tarefas')

//adiconar item no array
const criarTarefa = (valor, div) => {
    const tarefas = listaDeTarefas.read()
    if (valor == '') return div.remove()
    const novaTarefa = listaDeTarefas.create({ id: tarefas.length + 1, tarefa: valor })

}

//Imprimir quando array atualizado
const imprimir = () => {
    $boxTarefas.innerHTML = ''
    const tarefas = listaDeTarefas.read()

    tarefas.forEach((tarefa) => {
        const div = document.createElement('div')
        div.classList.add('tarefas-embrulho')

        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')

        const span = document.createElement('span')

        span.textContent = tarefa.tarefa.toUpperCase()

        const lixeira = document.createElement('img')
        lixeira.src = './lixeira.png'
        lixeira.classList.add('delete-lixeira')
        lixeira.href = tarefa.id

        div.appendChild(checkbox)
        div.appendChild(span)
        div.appendChild(lixeira)

        $boxTarefas.appendChild(div)

        //Quando clicar no texto mudar para um imput
        span.addEventListener('click', () => {
                const inputUpdate = document.querySelector('input')
                inputUpdate.setAttribute('type', 'text')
                inputUpdate.value = span.textContent
                div.appendChild(inputUpdate)
                span.remove()
                lixeira.remove()
                    // criar input
                inputUpdate.addEventListener('blur', () => {
                    const arroz = listaDeTarefas.update(tarefa.id, { tarefa: inputUpdate.value })
                    imprimir()
                })
            })
            //marcar checkbox
        checkbox.addEventListener('click', () => {
                span.classList.toggle('span-checkbox-on')
            })
            //Remover tarefa
        lixeira.addEventListener('click', () => {
            parent = listaDeTarefas.readbyid(lixeira.href)
            listaDeTarefas.delete(tarefa.id)
            imprimir()
        })
    })
}
imprimir()
$buttonNovaTarefa.addEventListener('click', () => {
    const tarefas = listaDeTarefas.read()

    const div = document.createElement('div')
    div.classList.add('tarefas-embrulho')

    const tarefasInput = document.createElement('input')
    tarefasInput.placeholder = 'Adicionar Tarefa'
    tarefasInput.classList.add('tarefas-input')

    div.appendChild(tarefasInput)
    $boxTarefas.appendChild(div)
    $buttonNovaTarefa.remove()

    const $buttonAdicionar = document.createElement('button')
    $buttonAdicionar.classList.add('button-adicionar-tarefa')
    $buttonAdicionar.textContent = 'Confirmar'

    $buttonBox.appendChild($buttonAdicionar)

    //Criar outro button com outras funcoes
    $buttonAdicionar.addEventListener('click', () => {
        $buttonAdicionar.remove()
        $buttonBox.appendChild($buttonNovaTarefa)

        criarTarefa(tarefasInput.value, div)
        imprimir()
    })
})