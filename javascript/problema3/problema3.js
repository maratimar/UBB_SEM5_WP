var n = 4;
//get the values to be put in the table
var values = [];
for (let x = 1; x <= n * n / 2; x++)values.push(x);
values = values.concat(values);
values = values.sort((a, b) => 0.5 - Math.random());

// cream tabelul cu valori
var table = document.getElementById("tabel");
table.style.fontSize=0;

//intarzierea
function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
var pairs = 0;
var clicked = -1;
//functie de click
var handleclick = function () {
    if (pairs < n*n/2) {
        this.style.fontSize = "17px";
        if (clicked === -1){
            clicked = this;
        }
        else {
            if (clicked.innerText === this.innerText) {
                clicked = -1;
                pairs++;
            }
            else {
                let copie=clicked;
                wait(1000).then(() => {
                    //cod dupa delay
                    this.style.fontSize = 0;
                    copie.style.fontSize = 0;
                });
            }
            clicked = -1;
        }
    }
    else{
        alert("You won!!");
    }
}
//creare tabel
for (let i = 0; i < n; i++) {
    var tr = document.createElement('tr');
    for (let j = 0; j < n; j++) {
        var td = document.createElement('td');
        td.onclick = handleclick;
        td.style.borderStyle = "solid";
        td.style.borderWidth = 1;
        td.style.width="60px";
        td.style.height="60px";
        td.style.textAlign="center";
        var text = document.createTextNode(values.pop());
        td.appendChild(text);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

