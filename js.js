const kezdertek = 45;
let time = kezdertek * 60;

let szamlaloelement = document.getElementById("countdowner");
setInterval(frissito,1000);
function frissito(){
  
    let percek = Math.floor(time / 60);
    let ms = time % 60; 
    ms = ms < 10 ? '0' + ms : ms ;
    szamlaloelement.innerHTML = `${percek}:${ms}`;
    time--;
}
    
let timeLeft = 0; 
let idovaltozo1; 


function szamlalokezdese() {
   

    countdown = setInterval(() => {
        let perc = Math.floor(timeLeft / 60); 
        let masodperc = timeLeft % 60; 

        // Formázzuk az időt (pl. 45:00)
        document.getElementById("countdowner").innerText =
            `${perc < 10 ? '0' + perc : perc}:${masodperc < 10 ? '0' + masodperc : masodperc}`;

        if (timeLeft >= 45 * 60) { 
            clearInterval(idovaltozo1); 
            document.getElementById("countdowner").innerText = "Idő lejárt!";
        }
        
        timeLeft++; 
    }, 1000); 
}

function addTime(minutesToAdd) {
    let perc = Math.floor(timeLeft / 60); 
    let masodperc = timeLeft % 60; 

    timeLeft += minutesToAdd * 60;
    szamlalokezdese(); 
}


szamlalokezdese();
let timeLeft2 = 45* 60;
let idovaltozo;
function masodikfel(){
    hosszabitaszam = setInterval(() => {
        let perc  = Math.floor(timeLeft2 / 60);
        let  masodperc  = timeLeft2 % 60;
      
        document.getElementById("masodikfelido").innerText =
            `${perc < 10 ? '0' + perc : perc}:${ masodperc  < 10 ? '0' +  masodperc  :  masodperc }`;

        if (timeLeft2 >= 90 * 60) { 
            clearInterval(idovaltozo);
            document.getElementById("masodikfelido").innerText = "Idő lejárt!";
        }

        timeLeft2++; 
    }, 1000); 

}
function addTime(Percekhozzadasa) {
    let perc = Math.floor(timeLeft2 / 60); 
    let masodperc = timeLeft2 % 60; 

    timeLeft += Percekhozzadasa * 60;
    masodikfel(); 
}
masodikfel(); 
