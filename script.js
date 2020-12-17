let divDechet = document.getElementById("dechet");

let tabDechet = ["plastique","papier carton","metaux","verre","dechets organique","bois","textile","mobilier","electronique","dechets du batiment","dechet dangereux","divers"]


function initDechet(nb,dechets){
    for(let i = 0; i < nb; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "dechetItem";
        divDechet.appendChild(newDiv);
    }
}

function indexAle(indexTab,random,tab){
    if(!indexTab.includes(tab[random])){
        indexTab.push()
        return [tab[random],indexTab]
    }
}

function nbRandom(max){
    return Math.ceil(Math.random() * max);
}

initDechet(10,tabDechet);