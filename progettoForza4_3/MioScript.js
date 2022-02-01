"use strict"
alert("MINIGIOCO FORZA4");
var NomeGiocatore=window.prompt("Ciao inserisci il tuo nome: ");
document.getElementById("Titolo").innerHTML="Benvenuto "+ NomeGiocatore;
var turno=1;
var k=0;
var array1= [];
var array1= [];
var array1= [];
var array1= [];
var array1= [];
var array1= [];


function giocata(nomeCella){

    if(turno==1)
    {
        document.getElementById('cella' + nomeCella).style.backgroundColor='#ff0000';
        document.getElementById('cella'+nomeCella).innerHTML="";
        if(nomeCella<7)
        {
            array1[nomeCella-1] = 1; 
        }
        else if(nomeCella>7)
        {
            array2[nomeCella-1] = 1;      
        }
        else if(nomeCella>14)
        {
            array3[nomeCella-1] = 1;      
        }
        else if(nomeCella>21)
        {
            array4[nomeCella-1] = 1;      
        }
        else if(nomeCella>28)
        {
            array5[nomeCella-1] = 1;      
        }
        else if(nomeCella>35)
        {
            array6[nomeCella-1] = 1;      
        }turno=2;
    }
    else{
        document.getElementById('cella'+nomeCella).style.backgroundColor='#ffff00';
        document.getElementById('cella'+nomeCella).innerHTML="";
        if(nomeCella<7)
        {
            array1[nomeCella-1] = 1; 
        }
        else if(nomeCella>7)
        {
            array2[nomeCella-1] = 1;      
        }
        else if(nomeCella>14)
        {
            array3[nomeCella-1] = 1;      
        }
        else if(nomeCella>21)
        {
            array4[nomeCella-1] = 1;      
        }
        else if(nomeCella>28)
        {
            array5[nomeCella-1] = 1;      
        }
        else if(nomeCella>35)
        {
            array6[nomeCella-1] = 1;      
        }turno=2;
        turno=1;
    }
}

