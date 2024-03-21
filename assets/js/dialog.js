document.addEventListener("DOMContentLoaded", function () {
const imgDialog = document.getElementById("img-dialog")
const pDialog = document.getElementById("p-dialog")
const soundRick1 = document.getElementById("sound-rick1")
const soundMorty1 = document.getElementById("sound-morty1")
const soundRick2 = document.getElementById("sound-rick2")
const soundMorty2 = document.getElementById("sound-morty2")
const soundRick3 = document.getElementById("sound-rick3")
const soundMorty3 = document.getElementById("sound-morty3")
const soundRick4 = document.getElementById("sound-rick4")
const soundMorty4 = document.getElementById("sound-morty4")
const soundRick5 = document.getElementById("sound-rick5")
const soundMorty5 = document.getElementById("sound-morty5")
const soundRick6 = document.getElementById("sound-rick6")



pDialog.addEventListener("click", function () {
    pDialog.classList.remove("btnStart");
    pDialog.classList.add("p-dialog");

    dialog1();

    setTimeout(() => {        
        dialog2();
    }, 21000);

    setTimeout(() => {        
        dialog3();
    }, 23000);

    setTimeout(() => {        
        dialog4();
    }, 46000);

    setTimeout(() => {        
        dialog5();
    }, 49000);

    setTimeout(() => {        
        dialog6();
    }, 61000);

    setTimeout(() => {        
        dialog7();
    }, 63000);

    setTimeout(() => {        
        dialog8();
    }, 74000);

    setTimeout(() => {        
        dialog9();
    }, 78000);

    setTimeout(() => {        
        dialog10();
    }, 98000);

    setTimeout(() => {        
        dialog11();
    }, 102000);
  
     
});

const dialog0 = () => {
    imgDialog.src = `assets/images/room0/rick0.jpeg`
    pDialog.textContent = "Lancer la discussion"
    pDialog.classList.add("btnStart")
    
}

const dialog1 = () => {
     dialog(`assets/images/room0/rick.person.png`, `Salut, Morty! Si tu écoutes ça, c'est probablement parce que tu as encore une gueule de bois monumentale. 
     Je te l'ai dit mille fois, les cocktails à base de jus de Fleeb ne sont pas une bonne idée. Mais bon, passons à autre chose.
     J'ai enregistré ce message pour te dire que tu m'as trop saoulé avec tes histoires d’activités en famille et de sorcier à Poudlard.`, soundRick1)
}

const dialog2 = () => {
        dialog(`assets/images/room0/morty-reflex.png`,`Oh là là, Rick...`,soundMorty1)
}

const dialog3 = () => {
    dialog(`assets/images/room0/rick.person.png`,`Je veux dire, sérieusement, Morty, tu es comme un disque rayé avec tes fantasmes sur quitter cette dimension ou te transformer en sorcier à Poudlard. Tu sais que tout ça c'est du vent, pas vrai ? On a des aventures bien plus intéressantes à vivre ici, entre les dimensions, avec des créatures réelles, pas avec des moldus et des elfes de maison. Et je n’ai pas le temps pour un escape game en famille.`, soundRick2)
}

const dialog4 = () => {
    dialog(`assets/images/room0/morty-reflex.png`,`Mais Rick, ça pourrait être marrant !`, soundMorty2)
}

const dialog5 = () => {
    dialog(`assets/images/room0/rick.person.png`,` Morty, Morty, Morty... tu n'as vraiment pas compris. On n'est pas dans un dessin animé où tout se résout en une demi-heure avec une morale à la fin. C'est la vraie vie, et ici, il faut être intelligent pour s'en sortir.`,soundRick3)
}

const dialog6 = () => {
    dialog(`assets/images/room0/morty-desesper.png`,`ayayay`, soundMorty3)
}
const dialog7 = () => {
    dialog(`assets/images/room0/rick.person.png`,` Bref, essaie de te débarrasser de cette obsession, Morty. Ou alors, va rejoindre le club de fans de Harry Potter et laisse-moi tranquille avec ça. Allez, on a du boulot à faire. Rick, terminé.`, soundRick4)
}

const dialog8 = () => {
    dialog(`assets/images/room0/morty-choque.png`,`Attends, Rick, que dois-je faire pour sortir de cette boucle ?`, soundMorty4)
}
const dialog9 = () => {
    dialog(`assets/images/room0/rick.person.png`,` Ah, tu as finalement décidé de prêter attention. Bien, voici ce que tu dois faire : tu dois parcourir les trois univers magiques que j'ai créés et trouver les objets nécessaires pour t'échapper. Mais attention, Morty, ce ne sera pas facile. Il te faudra attraper le balai magique dans le quatrième univers en combinant les objets de ton inventaire, pour pouvoir voler jusqu'à la sortie de cette tour enchantée.`, soundRick5)
}
const dialog10 = () => {
    dialog(`assets/images/room0/morty-enerve.png`,` Un balai magique ? Comme dans ces vieux films de sorciers ?`, soundMorty5)
}
const dialog11 = () => {
    dialog(`assets/images/room0/rick.person.png`,` Exactement, Morty. Tu vas devoir te plonger dans ces univers bizarres et trouver le moyen de t'échapper. Montre-moi que tu peux être un vrai aventurier interdimensionnel. Maintenant, vas-y, le temps presse.`, soundRick6)
}

dialog0();

const dialog = (src, text, audio) => {
    imgDialog.src = src
    pDialog.textContent = text
    audio.play()
}

});