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
        for (const tarefa of listaDeTarefas.read()) {

            if (id === tarefa.id) {
                return tarefa

            }
        }
    },
    update: (tarefaId, data) => {
        const tarefas = listaDeTarefas.read()

        const ListadeTarefasUpdate = tarefas.map((tarefa) => {

            if (tarefaId === tarefa.id) {
                const novaListadeTarefas = {...tarefa, ...data }

                return novaListadeTarefas
            }
            return tarefa
        })

        listaDeTarefas.tarefaList = ListadeTarefasUpdate
        return ListadeTarefasUpdate
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