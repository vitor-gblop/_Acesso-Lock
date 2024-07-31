
function nova_tranca() 
{
    document.getElementById("servico_opcoes_ocultas_section").style.display = "block";
    document.getElementById("novo_item").style.display = "flex";
}
function novo_acesso() 
{
    document.getElementById("servico_opcoes_ocultas_section").style.display = "block";
    document.getElementById("novo_acesso").style.display = "flex";
}
function item_options()
{
    document.getElementById("servico_opcoes_ocultas_section").style.display = "block";
    document.getElementById("item_options").style.display = "flex";
}

function servico_cancelar(id)
{
    document.getElementById(id).style.display = "none";
    document.getElementById("servico_opcoes_ocultas_section").style.display = "none";
}