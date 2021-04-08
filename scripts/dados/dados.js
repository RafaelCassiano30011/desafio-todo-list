const $boxTarefas = document.querySelector('.box-tarefas')

const listaDeTarefas = {
    tarefaList: [{
            id: 1,
            tarefa: 'tirar o lixo'

        },
        {
            id: 2,
            tarefa: 'lavar a louca',
        },
    ],

    read: () => {
        return listaDeTarefas.tarefaList
    },
    create: (item) => {
        const tarefa = listaDeTarefas.read()
        tarefa.push(item)
    },
    readbyid: (id) => {
        for (const parente of listaDeTarefas.read()) {

            if (id === parente.id) {
                return parente

            }
        }
    },

    delete: (ParentId) => {
        const parentes = listaDeTarefas.read()

        const deletaTarefaDaLista = parentes.filter((parent) => {
            if (ParentId === parent.id) return false
            return true
        })
        listaDeTarefas.tarefaList = deletaTarefaDaLista
        console.log(listaDeTarefas.tarefaList)


    },

}


export default listaDeTarefas