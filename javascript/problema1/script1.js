document.getElementById("artists1").addEventListener("click", function(e){
    if( e.target != this){
        document.getElementById("artists2").appendChild(e.target.cloneNode(true));
        e.target.remove();
    }
});

document.getElementById("artists2").addEventListener("click", function(e){
    if(e.target != this){
        document.getElementById("artists1").appendChild(e.target.cloneNode(true));
        e.target.remove();
    }
});