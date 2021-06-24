var tarefas = []
var tarefa = document.getElementById('adicionar')
var note = document.getElementById('notes')
var btnAdd = document.getElementById('btnadd')
btnAdd.onclick = adicionarTarefa;
btnAdd.onkeydown = adicionarTarefa;

function adicionarTarefa(){
    if(tarefa.value != ''){
        note.innerHTML = ` `
        tarefas.push(tarefa.value)
        for(var i = 0; i < tarefas.length; i++){
            note.innerHTML += `<br><div id="atividade${i}" onclick="concluir(${i})" style="background-color: rgb(18, 132, 185);width: 90%; margin: 0px auto; text-align: left;">${tarefas[i]} <input type="button" value="X" id="btn" onclick="apagarTarefa(${i})"></div>`
        }
    }   
}

function apagarTarefa(index){
    note.innerHTML = ``
    tarefas.splice(index,1)
    for(var i = 0; i < tarefas.length; i++){
        note.innerHTML += `<br><div id="atividade${i}" onclick="concluir(${i})" style="background-color: rgb(18, 132, 185); width: 90%; margin: 0px auto; text-align: left">${tarefas[i]} <input type="button" value="X" id="btn" onclick="apagarTarefa(${i})"></div>`
    }
}

function concluir(index){
    var div = document.getElementById('atividade'+index) 
    
    if(div.style.background == 'rgb(14, 252, 73)'){
        div.style.background = 'rgb(18, 132, 185)'
    }else{
        div.style.background = 'rgb(14, 252, 73)'
    }
}