let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let bt = document.getElementById("bt");
let div1 = document.getElementById("div1");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let div2 = document.getElementById("div2");
let table = document.getElementById("table");
let tableName = [];
let index;
let col;
let rowOption = document.createElement("option");
rowOption.innerHTML = "Name";
let rowName = [];
let rowAttr = [];
let rowEle = [];
let tableAttr = [];


function cover() {
    table.innerHTML = "";
}

function createTable() {
    div1.innerHTML = "";
    div2.innerHTML = "";
    bt.style.display = "none";
    input1.style.display = "inline";
    input2.style.display = "inline";
    div2.style.display = "block";

    input1.type = "text";
    input1.value = "";
    input1.placeholder = "Table Name";
    input1.className = "input";

    input2.type = "number";
    input2.value = "";
    input2.placeholder = "Columns Numbers";
    input2.className = "input";
    div1.appendChild(input1);
    div1.appendChild(input2);
}

function achieveInput2() {
    div2.innerHTML = "";

    col = input2.value;
    for(let i = 0; i < col; i ++){
        let inputs1 = document.createElement("input");
        inputs1.type = "text";
        inputs1.placeholder = "attribute";
        inputs1.className = "input";
        div2.appendChild(inputs1);
    }
    bt.style.display = "block";
}



function commitTable() {
    cover();

    let empty = false;
    for(let x = 0;x < div2.children.length;x ++){
        empty = empty || (div2.children[x].value !== "");
    }

    if(input1.value.length === 0){
        input1.placeholder = "Table Name Cannot Be Empty";
    }
    else if (empty){
        let tableDiv = document.createElement("tr");
        let option = document.createElement("option");
        option.innerHTML = input1.value;
        option.selected = true;
        select2.appendChild(option);
        for(let i = 0; i < col; i ++){
            let th = document.createElement("th");
            th.innerHTML = div2.children[i].value;
            th.className = "th";
            tableDiv.appendChild(th);
        }
        tableName.push(input1.value);
        tableAttr.push(tableDiv);
        table.appendChild(tableDiv);
        rowAttr.push(rowName);
        rowName = [];
    }

}

function addRow() {
    div1.innerHTML = "";
    div2.innerHTML = "";
    for(let i = 0;i < tableName.length;i ++){
        if(select2.options[select2.selectedIndex].text === tableName[i]){
            index = i;
            input1.style.display = "inline-block";
            input2.style.display = "inline-block";
            for(let j= 0; j < tableAttr[index].children.length; j ++){
                let inputs2 = document.createElement("input");
                inputs2.type = "text";
                inputs2.placeholder = tableAttr[i].children[j].innerHTML;
                inputs2.className = "input";
                div1.appendChild(inputs2);
            }
            input1.style.display = "none";
            input2.style.display = "none";
            div2.innerText = "";
        }
    }
}

function commitRow() {
    let empty = false;
    for(let x = 0;x < div1.children.length;x ++){

        empty = empty || (div1.children[x].value !== "");
    }
    if(empty){
        for(let i = 0;i < tableName.length;i ++) {
            if (select2.options[select2.selectedIndex].text === tableName[i]) {
                index = i;
                let rowDiv = document.createElement("tr");
                for (let i = 0; i < tableAttr[index].children.length; i++) {
                    let td = document.createElement("td");
                    td.className = "td";
                    td.innerHTML = div1.children[i].value;
                    rowDiv.appendChild(td);
                    rowEle.push(td);
                }
                rowAttr[index].push(rowEle);
                rowEle = [];
                table.appendChild(rowDiv);

            }
        }
    }

}

function deleteRow() {
    for(let i = 0;i < tableName.length;i ++) {
        if (select2.options[select2.selectedIndex].text === tableName[i]) {
            index = i;
            if (tableAttr[index].children.length !== undefined) {
                div1.innerHTML = "";
                div2.innerHTML = "";
                for (let i = 0; i < tableAttr[index].children.length; i++) {
                    let inputs3 = document.createElement("input");
                    inputs3.type = "text";
                    inputs3.placeholder = "attribute";
                    inputs3.className = "input";
                    div2.appendChild(inputs3);

                }

            }
        }
    }
}

function commitDR() {
    let num = 0;

    for(let i = 0; i < tableName.length; i ++) {
        if (tableName[i] === select2.options[select2.selectedIndex].text) {
            // let n = 0;
            for (let j = 0; j < rowAttr[i].length; j++) {
                num = 0;

                for (let k = 0; k < tableAttr[index].children.length; k++) {
                    if (rowAttr[i][j][k].innerHTML === "" || div2.children[k].value === rowAttr[i][j][k].innerHTML) {
                        num++;
                    }
                }
                if (Number(num) === Number(tableAttr[index].children.length)) {
                    table.removeChild(table.children[j + 1]);
                    rowAttr[i].splice(j, 1);
                    j --;
                }
            }
        }
    }
}

function deleteTable() {
    alert("WARNING: You cannot undo this action!");
    div1.innerHTML = "";
    div2.innerHTML = "";
}

function commitDT() {
    for(let i = 0; i < tableName.length; i ++) {
        if (tableName[i] === select2.options[select2.selectedIndex].text) {
            tableAttr.splice(i,1);
            tableName.splice(i,1);
            rowAttr.splice(i,1);
            select2.options.remove(i + 1);
            i --;
        }
    }
    if(select2.options.length === 1){
        select2.options[0].selected = true;
    }
    else
        select2.options[1].selected = true;
    changeS2option();
}

function changeS1Option(){
    if(select1.options[0].selected){
        bt.style.display = "none";
        div1.innerHTML = "";
        div2.innerHTML = "";
        // pushRowName();
    }
    else if(select1.options[1].selected){
        div1.innerHTML = "";
        div2.innerHTML = "";
        createTable();
        // pushRowName();
    }
    else if(select1.options[2].selected){
        addRow();
    }
    else if(select1.options[3].selected){
        deleteRow();
        // pushRowName();
    }
    else if(select1.options[4].selected){
        deleteTable();
    }
}

function changeS2option() {
    if(select2.options[0].selected){
        table.innerHTML = "";
        // pushRowName();
    }
    else {
        for(let i = 1;i <select2.options.length;i ++){
            if(select2.options[i].selected){
                table.innerHTML = "";
                index = i - 1;
                table.appendChild(tableAttr[i - 1]);

                for(let q = 0;q <  rowAttr[i - 1].length;q ++){
                    let attrDiv = document.createElement("tr");
                    for(let w = 0;w < tableAttr[index].children.length;w ++){
                        attrDiv.appendChild(rowAttr[i - 1][q][w])
                    }
                    table.appendChild(attrDiv);
                }
            }
        }
    }
}

function changeOption() {
    changeS1Option();
    changeS2option();
}

function commit(){
    if(select1.options[1].selected)
        commitTable();
    else if(select1.options[2].selected)
        commitRow();
    else if(select1.options[3].selected){
        commitDR();
    }
    else if(select1.options[4].selected){
        commitDT();
    }
}

select1.addEventListener("change",changeOption,false);
input2.addEventListener("change",achieveInput2,false);
bt.addEventListener("click",commit,false);
select2.addEventListener("change",changeOption,false);