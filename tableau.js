
function plus(id, btn_id) {

    elt = document.getElementById(id)
    btn = document.getElementById(btn_id)
    if(btn.innerHTML.indexOf("Plus") != -1) {
        elt.style.maxHeight = "400px";
        elt.style.color = "black";
        elt.style.background = "white";
        btn.innerHTML = "&#10548 Moins";
    }
    else
    {
        elt.style.maxHeight = "200px";
        elt.style.color = "gray";
        elt.style.background = "linear-gradient(to bottom, transparent, #ddd)";
        btn.innerHTML = "&#10549; Plus";
    }   
}


function buildTable(parent_id, title, data){
    var parent = document.getElementById(parent_id);
    parent.innerHTML = "<header><h3>"+title+"</h3></header>";
    parent.innerHTML += "<div class='table-wrapper' id=table_"+parent_id+" class='tableaux'><button onclick='plus(this.parentNode.id,this.id)' id='btn_"+parent_id+" class='plus-btn'>&#10549; Plus</button><table class='default'><thead><tr><th>N°</th><th>Composant</th><th>Description</th></tr></thead><tbody id='tbody_"+parent_id+"'></tbody><tfoot><tr><td colspan='3'></td></tr></tfoot></table></div>";

    var i = 1;
    tbody = document.getElementById("tbody_"+parent_id);
    data.forEach((line) => {
        tbody.innerHTML += "<tr><td>"+ i.toString() + "</td><td>"+line[0]+"</td><td>+"+line[1]+"</td></tr>";
        i+=1;
    });

}
    



