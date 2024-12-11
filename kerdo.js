
function ido_hozzaAdas()
{

}
function ido_elvonas()
{

}

function szamlalo()
{

}

let gol1 = 0;
let gol2 = 0;
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