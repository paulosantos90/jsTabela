var tb, index; 

function addLocal(predio, local){

    tb = document.getElementById("tbLocal");
    var qtdLinhas = tb.rows.lenght;
    var linha = tb.insertRow(qtdLinhas);

    var cellPredio = linha.insertCell(0);
    var cellLocal = linha.insertCell(1);
    var cellBtnEditar = linha.insertCell(2);
    var cellBtnRemover = linha.insertCell(3);

    cellPredio.innerHTML = predio;
    cellLocal.innerHTML = local;
    cellBtnEditar.innerHTML = "<button onclick='alteraLinha(this)'>Editar</button>";
    cellBtnRemover.innerHTML = "<button onclick='removeLinha(this)'>Remover</button>";

    preencheCamposForm();

}

function alteraLinha(predio, local) {
    tb.rows[index].cells[1].innerHTML = predio;
    tb.rows[index].cells[2].innerHTML = local;
}

function preencheCamposForm() {

    for(var i = 0; i < tb.rows.length; i++) 
    {
        tb.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtPredio").value = tb.rows[index].cells[0].innerText;
            document.getElementById("txtLocal").value = tb.rows[index].cells[1].innerText;
        }
    }
}

function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbLocal').deleteRow(i);
  }  
