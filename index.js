const form = document.getElementById('form_atividade');

const imgAprovado = '<img src="/img/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="/img/reprovado.png" alt="Emoji decepcionado"/>'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('digite a nota mínima'));

form.addEventListener('submit' , function(e){
    e.preventDefault();

    addLinha();
    atualizaMediaFinal();
});

function addLinha(){
    
    const inputNomeAtividade = document.getElementById('nome_atividade');
    const inputNotaAtividade = document.getElementById('nota_atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML += linha;   
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaMediaFinal(){

    const mediaFinal = calculaMediaFinal();

    document.getElementById('media_final_valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media_final_resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){
    let somaNotas = 0;

    for(let i=0; i<notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}