
setInterval('afficherHeure()', 1000);
var btnAjouterAlarme = document.getElementById("btn_ajouterAlarme");
var btnArreterAlarme = document.getElementById("btn_arreterAlarme");

btnAjouterAlarme.addEventListener("click", setAlarme, false);
btnArreterAlarme.addEventListener("click", Arreter, false);

// Afficher l'heure sur la page.
function afficherHeure() {
var date = new Date();
var ajouterZeroMinute;
var ajouterZeroSeconde;

if(date.getMinutes()<10){ ajouterZeroMinute = "0"; } else { ajouterZeroMinute = ""; }
if(date.getSeconds()<10){ ajouterZeroSeconde = "0"; } else { ajouterZeroSeconde = ""; }

document.getElementById("span_horloge").textContent = date.getHours() + ":" + ajouterZeroMinute + date.getMinutes() + ":" + ajouterZeroSeconde + date.getSeconds();
};

// Ajouter une alarme
function setAlarme() {
document.getElementById("btn_ajouterAlarme").disabled = true;
document.getElementById("btn_arreterAlarme").disabled = false;

var getAlarmeHeure = document.getElementById("select_alarmeHeures");
var setAlarmeHeure = getAlarmeHeure.options[getAlarmeHeure.selectedIndex].value;

var getAlarmeMinute = document.getElementById("select_alarmeMinutes");
var setAlarmeMinute= getAlarmeMinute.options[getAlarmeMinute.selectedIndex].value;

var getAlarmeSeconde = document.getElementById("select_alarmeSecondes");
var setAlarmeSeconde = getAlarmeSeconde.options[getAlarmeSeconde.selectedIndex].value

monAlarmeJSon = {"heure":setAlarmeHeure, "minute":setAlarmeMinute, "seconde":setAlarmeSeconde};

var calculTemps = (monAlarmeJSon.heure * 3600000) + (monAlarmeJSon.minute * 60000) + (monAlarmeJSon.seconde * 1000);
setTimeout('JouerSon()', calculTemps);
};

function JouerSon(){
	document.getElementById('buzzer').play();
};

function Arreter(){
	document.getElementById('buzzer').pause();
	document.getElementById("btn_ajouterAlarme").disabled = false;
	document.getElementById("btn_arreterAlarme").disabled = true;
};
