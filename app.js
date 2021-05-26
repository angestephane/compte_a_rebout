const pluriel = (nb) => {
    nb > 0 ? "s" : "";
}

const compteRebout = () => {
    //Date de fin du compte à rebout
    const jourDebut = new Date('January 1, 2022 00:00:00').getTime();//conversion en milliseconde
    
    //Date actuelle
    const jourActu = new Date().getTime();

    //difference entre les deux dates
    const difference = jourDebut - jourActu; // milliseconde
    

    // variables
    const seconde = 1000;
    const minute = 60 * seconde;
    const heure = 60 * minute;
    const jour = 24 * heure;

    /* calcule du nombre de jours, heure, de minute 
    de secondes qu'il y a entre les deux dates*/

    const texteJour = Math.floor(difference / jour);
    const texteHeure = Math.floor((difference % jour) / heure);
    const texteMinute = Math.floor((difference % heure) / minute);
    const texteSeconde = Math.floor((difference % minute) / seconde);
    
    document.querySelector(".jour").innerText = texteJour;
    document.querySelector(".heure").innerText = texteHeure;
    document.querySelector(".minute").innerText = texteMinute;
    document.querySelector(".seconde").innerText = texteSeconde;
    

}
setInterval(compteRebout, 1000);