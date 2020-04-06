//mettre les noms des recettes dans la liste
let listeSucree=["Bugnes","Caramel au beurre salé maison","Churros","Crêpes","Cookies","Fondant au chocolat","Fromage blanc à la noix de coco","Gateau eu yaourt","Gaufres","Macarons au chocolat","Marbré chocolat cookie","Meringues","Mugcake","Porridge à la noix de coco","Sablés", "Tarte au citron meringuée"];
function EntierAleatoire(max)
{
    return Math.floor(Math.random()*(max +1));
}

var i =EntierAleatoire(listeSucree.length -1);
let recetteSucree=listeSucree[i];


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

document.write("Je te propose de cuisiner la recette suivante : "+ recetteSucree);