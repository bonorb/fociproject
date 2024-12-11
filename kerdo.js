let gol1 = 0;
let gol2 = 0;
let jatekos_lista = [];


function csapat1minus(){
    if (gol1 > 0)
        gol1--;
   
    document.getElementById('csap1').innerHTML = gol1;
}
function csapat1plus(){
     gol1++;
    
    document.getElementById('csap1').innerHTML = gol1;

}
function csapat2minus(){
    if (gol2 > 0)
        gol2--;
   
    document.getElementById('csap2').innerHTML = gol2;
}
function csapat2plus(){
     gol2++;
    
    document.getElementById('csap2').innerHTML = gol2;

}
function gomb() {
    let nev = document.getElementById("nev").value;
    let ido = 120000;
    let idoszal = setInterval(tick, 1000);
  
    lista.push({ name: nev, time: ido });
  
}  

function tick(){

    for (let i = 0; i < jatekos_lista.length; i++){
        
        jatekos_lista[i].time -= 1;
        if(jatekos_lista[i].time == 0)
        {
            jatekos_lista.splice(i, 1)
        }
    }
    kiiras();
}