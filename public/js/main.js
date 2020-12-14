// Définir le body
let body = document.body;
body.style.margin = "0% 5%"

// Créer une section
let section = document.createElement('section');

// Insérer dans le body
body.append(section);

///////////////  Espace entre les divs  ////////////////////
let br = document.createElement('br');
// let black = "#000000";


////////////////////////////////////////////////////
///////////////  Div Changements  ////////////////////
// Créer une div change
let divChange = document.createElement('div');

// Style de base de la div
divChange.style.height = "150px";
divChange.style.width = "400px";
divChange.style.border = `2px solid black`;
////////////////////////////////////////////////////
////////////////////////////////////////////////////



///////////////  Div Titre  ////////////////////
// Créer div Titre
let divTitre = document.createElement('div');
let titre = document.createElement('h1');
titre.innerHTML = "Le Dom - Exo: StyleGenerator";
titre.style.fontFamily = "Arial";
titre.style.backgroundColor = "turquoise";
titre.style.margin = "1% 0%"

// Créer une ligne
let under = document.createElement('hr');
under.style.color = "turquoise";

// Insérer le titre et le hr dans la div Titre
divTitre.append(titre, under);


///////////////  Div Background color et top  ////////////////////
// Créer une div background
let divBG = document.createElement('div');
divBG.style.margin = "2% 0%";

// Créer 10 boutons
let bouton;
for (let i = 0; i < 10; i++){
    bouton = document.createElement('button');
    var boutons = divBG.getElementsByTagName('button');
    // Espace entre les boutons
    bouton.style.margin = "0% 0.25%"
    // Insérer les boutons dans ma divBG
    divBG.append(bouton);
    
    // Taille des boutons
    if((i == 0) || (i == 1) || (i == 2) || (i == 3)){
        boutons[i].style.height = "35px";
        boutons[i].style.width = "35px";
    } else if ((i == 4) || (i == 5) || (i == 6)){
        boutons[i].style.height = "25px";
        boutons[i].style.width = "45px";
    } else {
        boutons[i].style.height = "30px";
        boutons[i].style.width = "45px";
    };

    // Style Général
    boutons[i].style.padding = "0";
    boutons[i].style.borderRadius = "5px";
    boutons[i].style.border = "none";
    boutons[i].style.backgroundColor = "white";

    // Style par rapport aux différents boutons
    switch(i){
        // 4 carrés colorés
        case 0:
            boutons[i].innerHTML = "W";
            boutons[i].style.backgroundColor = "lightgray";
            //// Event
            boutons[0].addEventListener('click', function(){
                divChange.style.backgroundColor = "white";
                divChange.style.backgroundColor = "lightgray";
            });
            break;
        case 1:
            boutons[i].innerHTML = "R";
            boutons[i].style.backgroundColor = "red";
            //// Event
            boutons[1].addEventListener('click', function(){
                divChange.style.backgroundColor = "white";
                divChange.style.backgroundColor = "red";
            });
            break;
        case 2:
            boutons[i].innerHTML = "G";
            boutons[i].style.backgroundColor = "green";
            //// Event
            boutons[2].addEventListener('click', function(){
                divChange.style.backgroundColor = "white";
                divChange.style.backgroundColor = "green";
            });
            break;
        case 3:
            boutons[i].innerHTML = "B";
            boutons[i].style.backgroundColor = "blue";
            //// Event
            boutons[3].addEventListener('click', function(){
                divChange.style.backgroundColor = "white";
                divChange.style.backgroundColor = "blue";
            });
            break;
        // 6 rectangles
        case 4:
            boutons[i].style.border = "thick solid black";
            //// Event
            boutons[4].addEventListener('click', function(){
                divChange.style.border = "none";
                divChange.style.border = "thick solid black";
            });
            break;
        case 5:
            boutons[i].style.border = "dashed";
            //// Event
            boutons[5].addEventListener('click', function(){
                divChange.style.border = "none";
                divChange.style.border = "dashed";
            });
            break;
        case 6:
            boutons[i].style.border = "2px black solid";
            //// Event
            boutons[6].addEventListener('click', function(){
                divChange.style.border = "none";
                divChange.style.border = "2px black solid";
            });
            break;
        case 7:
            boutons[i].innerHTML = "top";
            boutons[i].style.border = "none";
            boutons[i].style.backgroundColor = "lightgray";
            //// Event
            boutons[7].addEventListener('click', function(){
                divChange.style.border = "none";
                divChange.style.backgroundColor = "lightgray";
            });
            break;
        case 8:
            boutons[i].innerHTML = "top";
            boutons[i].style.borderTop = "3px solid red";
            //// Event
            boutons[8].addEventListener('click', function(){
                divChange.style.border = "none";
                divChange.style.borderTop = "3px solid red";
            });
            break;
        case 9:
            boutons[i].innerHTML = "top";
            boutons[i].style.borderTop = "thick solid red";
            //// Event
            boutons[9].addEventListener('click', function(){
                divChange.style.border = "none";
                divChange.style.borderTop = "thick solid red";
            });
            break;
    };
}


///////////////  Div Border + ColorInput  ////////////////////
// Créer une div border
let divBorder = document.createElement('div');
divBorder.style.margin = "4% 0%"

// Créer un input color
let inColor = document.createElement('input');
inColor.setAttribute('type', "color");
inColor.style.width = "200px"

// Récupérer la valeur de l'input
let colorValeur = "#000000";
inColor.addEventListener('change', function(){
    colorValeur = inColor.value;
    console.log(colorValeur)
});

    // Insérer incolor dans la div
divBorder.append(inColor);

// Créer 5 boutons
for (let i = 0; i < 5; i++){
    bouton = document.createElement('button');
    var boutonsBorder = divBorder.getElementsByTagName('button');
    // Espace entre les boutons
    bouton.style.margin = "0% 0.25%"
    // Insérer les boutons dans ma divBG
    divBorder.append(bouton);

    // Style Général
    boutonsBorder[i].style.height = "35px";
    boutonsBorder[i].style.width = "40px";
    boutonsBorder[i].style.padding = "0";
    boutonsBorder[i].style.border = "0.5px solid gray";
    boutonsBorder[i].style.backgroundColor = "white";

    // Style par rapport aux différents boutons
    switch(i){
        case 0:
            boutonsBorder[i].style.border = `3px solid black`;
            //// Event
            boutonsBorder[0].addEventListener('click', function(){
                if(divChange.style.border == `3px solid black`){
                    divChange.style.border = "none";
                } else if (colorValeur != "#000000"){
                    divChange.style.border = "none";
                    divChange.style.border = `3px solid ${colorValeur}`;
                } else{
                    divChange.style.border = "none";
                    divChange.style.border = `3px solid black`;
                }
            });
            break;
        case 1:
            boutonsBorder[i].style.borderTop = `3px solid black`;
            //// Event
            boutonsBorder[1].addEventListener('click', function(){
                if(divChange.style.borderTop == `3px solid black`){
                    divChange.style.borderTop = "none";
                } else if (colorValeur != "#000000") {
                    divChange.style.border = "none";
                    divChange.style.borderTop = `3px solid ${colorValeur}`
                } else{
                    divChange.style.border = "none";
                    divChange.style.borderTop = `3px solid black`;
                }
            });
            break;
        case 2:
            boutonsBorder[i].style.borderRight = `3px solid black`;
            //// Event
            boutonsBorder[2].addEventListener('click', function(){
                if(divChange.style.borderRight == `3px solid black`){
                    divChange.style.borderRight = "none";
                } else if (colorValeur != "#000000"){
                    divChange.style.border = "none";
                    divChange.style.borderRight = `3px solid ${colorValeur}`;
                } else{
                    divChange.style.border = "none";
                    divChange.style.borderRight = `3px solid black`;
                }
            });
            break;
        case 3:
            boutonsBorder[i].style.borderBottom = `3px solid black`;
            //// Event
            boutonsBorder[3].addEventListener('click', function(){
                if(divChange.style.borderBottom == `3px solid black`){
                    divChange.style.borderBottom = "none";
                } else if (colorValeur != "#000000"){
                    divChange.style.border = "none";
                    divChange.style.borderBottom = `3px solid ${colorValeur}`;
                } else{
                    divChange.style.border = "none";
                    divChange.style.borderBottom = `3px solid black`;
                }
            });
            break;
        case 4:
            boutonsBorder[i].style.borderLeft = `3px solid black`;
            //// Event
            boutonsBorder[4].addEventListener('click', function(){
                if(divChange.style.borderLeft == `3px solid black`){
                    divChange.style.borderLeft = "none";
                } else if (colorValeur != "#000000"){
                    divChange.style.border = "none";
                    divChange.style.borderLeft = `3px solid ${colorValeur}`;
                } else{
                    divChange.style.border = "none";
                    divChange.style.borderLeft = `3px solid black`;
                }
            });
            break;
    };
};


///////////////  Div Radius  ////////////////////
// Créer une div radius
let divRadius = document.createElement('div');
divRadius.style.marginBottom = "3%"

// Créer 5 boutons
for (let i = 0; i < 5; i++){
    bouton = document.createElement('button');
    var boutonsRadius = divRadius.getElementsByTagName('button');
    // Espace entre les boutons
    bouton.style.margin = "0% 0.25%"
    // Insérer les boutons dans ma divBG
    divRadius.append(bouton);

    // Style Général
    boutonsRadius[i].style.height = "35px";
    boutonsRadius[i].style.width = "40px";
    boutonsRadius[i].style.padding = "0";
    boutonsRadius[i].style.border = "1px solid grey";
    boutonsRadius[i].style.backgroundColor = "white";

    // Style par rapport aux différents boutons
    switch(i){
        // 4 carrés colorés
        case 0:
            boutonsRadius[i].style.borderRadius = "12px";
            //// Event
            boutonsRadius[0].addEventListener('click', function(){
                if (divChange.style.borderRadius == "15px"){
                    divChange.style.borderRadius = "0px";
                } else{
                    divChange.style.borderRadius = "0px";
                    divChange.style.borderRadius = "15px";
                }
            });
            break;
        case 1:
            boutonsRadius[i].style.borderTopLeftRadius = "15px";
            //// Event
            boutonsRadius[1].addEventListener('click', function(){
                if(divChange.style.borderTopLeftRadius == "18px"){
                    divChange.style.borderTopLeftRadius = "0px";
                } else{
                    divChange.style.borderRadius = "0px";
                    divChange.style.borderTopLeftRadius = "18px";
                }
            });
            break;
        case 2:
            boutonsRadius[i].style.borderTopRightRadius = "15px";
            //// Event
            boutonsRadius[2].addEventListener('click', function(){
                if(divChange.style.borderTopRightRadius == "18px"){
                    divChange.style.borderTopRightRadius = "0px";
                } else{
                    divChange.style.borderRadius = "0px";
                    divChange.style.borderTopRightRadius = "18px";
                }
            });
            break;
        case 3:
            boutonsRadius[i].style.borderBottomRightRadius = "15px";
            //// Event
            boutonsRadius[3].addEventListener('click', function(){
                if(divChange.style.borderBottomRightRadius == "18px"){
                    divChange.style.borderBottomRightRadius = "0px";
                } else{
                    divChange.style.borderRadius = "0px";
                    divChange.style.borderBottomRightRadius = "18px";
                }
            });
            break;
        case 4:
            boutonsRadius[i].style.borderBottomLeftRadius = "15px";
            //// Event
            boutonsRadius[4].addEventListener('click', function(){
                if(divChange.style.borderBottomLeftRadius == "18px"){
                    divChange.style.borderBottomLeftRadius = "0px";
                } else{
                    divChange.style.borderRadius = "0px";
                    divChange.style.borderBottomLeftRadius = "18px";
                }
            });
            break;
    };
};




/////////////////////////////////////////////////////
// Insérer les div dans la section
section.append(divTitre, br, divBG, br, divBorder, br, divRadius, br, divChange);
