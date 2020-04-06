//mettre les noms des recettes dans la liste
let listeSalee=["Criques","Galettes de flocons d'avoine","Galette de sarrasin estivale","Gratin de pâtes","Hamburger maison","Lasagnes à la riste d'aubergine","Phô","Pomme de terre vapeur épicée","Pomme de terre et fromage blanc","Poulet au curry","Quinoa et carottes rapées épicées","Risotto aux champignons","Riz au poivron et sauce soja","Salade Vietnamienne","Soupe Chinoise","Soupe de pâtes, tomates et champignons"];

function EntierAleatoire(max)
{
    return Math.floor(Math.random()*(max +1));
}

var i =EntierAleatoire(listeSalee.length -1);
let recetteSalee=listeSalee[i];


let myButton=document.querySelector('button');
let myHeading=document.querySelector('h4');

function toggle_text(id){
    var span = document.getElementById(id);
    if (span.style.display == "none"){
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }
}

document.write("Je te propose de cuisiner la recette suivante : "+ recetteSalee);