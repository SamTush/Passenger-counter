let countEl = document.getElementById("count-el");


let count = 0; 

function increment() { 
    count = count + 1;
    countEl.innerText = count;
 }

 function save() {
     count = 0;
     countEl.innerText = count;
 }




