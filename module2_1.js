function chargerContenu()
{
    console.log("coucou, la fonction chargerContenu() est exécutée");

    document.title = "Mon titre sur l'onglet";
    //document.getElementsByTagName("h1")[0].innerText = "Ceci est mon vrai titre";

    document.getElementById("titre").innerText= "Ceci est vraiment le bon titre";

    var elInput = document.createElement("input");

    /*var attValue = document.createAttribute("value");
    attValue.value = "une zone de saisie";
    elInput.setAttributeNode(attValue);*/

    elInput.setAttribute("value","une zone de saisie");

    //afterend, beforebegin, afterbegin, beforerend
    document.getElementById("titre").insertAdjacentElement("afterend",elInput);
}