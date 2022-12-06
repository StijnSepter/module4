var voornaam = "Stijn";
var achternaam = "Septer";
var volledigeNaam = "Stijn Septer";
var geboortedag = "05:";
var geboortemaand = "02:";
var huidig_jaartal = 2022;
var geboortejaar = 2005;
var leeftijd = "Number";
var dag_van_het_jaar = 6;

var straat = "ik woon op de diaconie-erf ";
var huisnummer = 1;
var woonplaats = "in Odijk";
var woonachtig_in_utrecht = true;

var aantal_studenten_in_deze_klas = 22;
var kosten_van_frikandelbroodje = 1.8;
var aantal_frikandelbroodjes_per_student = 2;
var totale_lunchkosten = Number;

document.write("Voornaam is " + voornaam);
document.write("<br>");
document.write("Achternaam is " + achternaam);
document.write("<br>");
document.write("voledigenaam is " + voornaam + achternaam);
document.write("<br>");
document.write("<br>");
document.write("mijn geboortedag is " + geboortedag);
document.write("<br>");
document.write("mijn geboortemaand is " + geboortemaand);
document.write("<br>");
document.write("het is " + huidig_jaartal);
document.write("<br>");
document.write("geboortejaar is " + geboortejaar);
document.write("<br>");
document.write("ik ben ");
document.write(huidig_jaartal - geboortejaar);
document.write(" jaar oud");
document.write("<br>");
document.write("<br>");

document.write(straat);
document.write(huisnummer);
document.write("<br>");
document.write(woonplaats);
document.write("<br>");
document.write("woon ik in de profintie Utrecht " + woonachtig_in_utrecht);
document.write("<br>");
document.write("<br>");

document.write("aantal studenten in de klas " + aantal_studenten_in_deze_klas);
document.write("<br>");
document.write("prijs per frikkandelbroodje " + kosten_van_frikandelbroodje);
document.write("<br>");
document.write(
  "aantal frikandelbroodjes per student " + aantal_frikandelbroodjes_per_student
);
document.write("<br>");
document.write(
  "totale lunchkosten is €" +
    aantal_studenten_in_deze_klas *
      aantal_frikandelbroodjes_per_student *
      kosten_van_frikandelbroodje
);
