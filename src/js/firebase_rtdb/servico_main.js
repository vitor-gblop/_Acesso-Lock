// const gn = new General;

function load_itens()
{
    let db = firebase.database().ref(path_dispositivo);
    
    db.on('value', (i)=>{
        i.forEach(e =>{
            console.log(e);
            itens_add(e);
        })
    });
}
function itens_add(obj)
{
    // chamada - call
    let tr_tag = document.createElement("tr");
    let td_tag_1 = document.createElement("td");
    let td_tag_2 = document.createElement("td");
    let td_tag_3 = document.createElement("td");
    let td_tag_4 = document.createElement("td");

    let td_actions_tag = document.createElement("button")

    // atributos - atributtes
    // tr_tag.setAttribute("style", "text-align: center")
    td_actions_tag.setAttribute("class", "actions");
    td_actions_tag.setAttribute("onclick", "item_options()");
    td_actions_tag.setAttribute("id", obj.key);

    // inner html
    td_tag_1.innerHTML = obj.val().nome;
    td_tag_2.innerHTML = obj.val().descricao;
    td_tag_3.innerHTML = obj.val().pino;
    td_actions_tag.innerHTML = "Ações";

    // appendChild
    td_tag_4.appendChild(td_actions_tag);
    tr_tag.appendChild(td_tag_1);
    tr_tag.appendChild(td_tag_2);
    tr_tag.appendChild(td_tag_3);
    tr_tag.appendChild(td_tag_4)
    document.getElementById("dispositivos_list").appendChild(tr_tag);
}

// function load_agendas()
// {
//     let db = firebase.database().ref('/usuarios/vitor gabriel/agendas');
    
//     db.on('value', (i)=>{
//         i.forEach(e =>{
//             console.log(e);
//             agendas_add(e);
//         })
//     });
// }

function agendas_add(obj)
{
    let tr_tag = document.createElement("tr");
    let td_tag_1 = document.createElement("td");
    let td_tag_2 = document.createElement("td");
    let td_tag_3 = document.createElement("td");
    let td_tag_4 = document.createElement("td");

    td_tag_1.innerHTML = obj.key;
    td_tag_2.innerHTML = obj.val().data;
    td_tag_3.innerHTML = obj.val().hora.entrada;
    td_tag_4.innerHTML = obj.val().hora.saida;

    tr_tag.appendChild(td_tag_1);
    tr_tag.appendChild(td_tag_2);
    tr_tag.appendChild(td_tag_3);
    tr_tag.appendChild(td_tag_4);

    document.getElementById("agenda_list").appendChild(tr_tag);
}

(function ()
{
    load_itens();
    load_agendas();
})();