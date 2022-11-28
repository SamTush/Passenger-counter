let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


let count = 0; 
let dash = " - ";
let space = " ";

function increment() { 
    count += 1;
    countEl.innerText = count;
 }

 function save() {
     saveEl.innerText += (space + count + dash);
 }

 function restart() {
    count = 0;
    countEl.innerText = count;
    saveEl.innerText = "Previous enteries: "
 }



