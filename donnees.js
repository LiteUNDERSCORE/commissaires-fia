// What's the penalty : on montre un incident réel, il faut deviner la décision des commissaires.
// choix : les 4 réponses proposées pour cet incident. bonne : numéro du bon choix (0 = 1er, 1 = 2e…).
// debut / fin : en secondes. Les clips sont coupés avant qu'on voie la sanction.

window.JEU = {
  cle: "whats-the-penalty",
  titre: "What's the",
  accent: "penalty",
  question: "Quelle sanction ?",
  unite: "Incident",
  icone: "⚖",
  pauseLegere: true,     // en pause on garde l'image visible pour revoir l'action
  zoom: 1.2,
  finTexte: "À vous de juger"
};

// Chaque bonne réponse vaut 1 point.

window.ELEMENTS = [
  { youtube: "https://www.youtube.com/watch?v=CQyL-6KDAxc", recap: "Singapour 2017", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Verstappen : 10 secondes", "Vettel : 5 places sur la grille", "Räikkönen : 5 secondes"], bonne: 0,
    reponse: "Aucune pénalité", detail: "Vettel, Räikkönen et Verstappen s'accrochent au départ. Les commissaires parlent d'un incident de course : personne n'est sanctionné." },
  { youtube: "https://www.youtube.com/watch?v=Jk45D_OULQA", recap: "Silverstone 2021", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Hamilton : 5 secondes", "Hamilton : 10 secondes", "Hamilton : Stop & Go"], bonne: 2,
    reponse: "Hamilton : 10 secondes", detail: "Hamilton, jugé principal responsable du contact avec Verstappen à Copse. Il gagnera quand même la course." },
  { youtube: "https://www.youtube.com/watch?v=40BfnWBxJSY", recap: "Suzuka 1989", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Prost : disqualifié", "Senna : disqualifié", "Senna : 10 secondes"], bonne: 2,
    reponse: "Senna : disqualifié", detail: "Senna repart et gagne… mais il est disqualifié pour avoir coupé la chicane. Prost est champion du monde." },
  { youtube: "https://www.youtube.com/watch?v=SFg58c3YM70", recap: "Spa 2012", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Grosjean : 10 places sur la grille", "Grosjean : 1 course de suspension", "Hamilton : 5 secondes"], bonne: 2,
    reponse: "Grosjean : 1 course de suspension", detail: "Grosjean déclenche le carambolage du départ et frôle la tête d'Alonso. Il est suspendu pour le GP suivant à Monza." },
  { youtube: "https://www.youtube.com/watch?v=FIZC2zPHW14", recap: "Monza 2021", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Verstappen : 10 secondes", "Verstappen : 3 places sur la grille", "Hamilton : 5 secondes"], bonne: 2,
    reponse: "Verstappen : 3 places sur la grille", detail: "Verstappen recule de 3 places sur la grille du GP suivant (Russie) pour l'accrochage avec Hamilton." },
  { youtube: "https://www.youtube.com/watch?v=nN4heMtDCRQ", recap: "Spa 2008", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Hamilton : 5 secondes", "Hamilton : 25 secondes", "Räikkönen : 10 secondes"], bonne: 2,
    reponse: "Hamilton : 25 secondes", detail: "Hamilton coupe la chicane pour passer Räikkönen. 25 secondes ajoutées : il perd la victoire, Massa gagne." },
  { youtube: "https://www.youtube.com/watch?v=3bX1Y_7WfVg", recap: "Djeddah 2021", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Verstappen : 5 secondes", "Verstappen : 10 secondes", "Hamilton : 10 secondes"], bonne: 2,
    reponse: "Verstappen : 10 secondes", detail: "Verstappen, jugé principal responsable du contact après avoir freiné brusquement devant Hamilton." },
  { youtube: "https://www.youtube.com/watch?v=IiI2HRbmXK8", recap: "Valence 2012", debut: 0, fin: 9,
    choix: ["Aucune pénalité", "Hamilton : 20 secondes", "Maldonado : 20 secondes", "Maldonado : disqualifié"], bonne: 2,
    reponse: "Maldonado : 20 secondes", detail: "Maldonado coupe la piste puis revient en percutant Hamilton dans le dernier tour. 20 secondes pour Maldonado." },
  { youtube: "https://www.youtube.com/watch?v=dla65PfyD-E", recap: "Adélaïde 1994", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Schumacher : disqualifié", "Schumacher : exclu du championnat", "Hill : 10 secondes"], bonne: 0,
    reponse: "Aucune pénalité", detail: "Schumacher touche le mur puis percute Hill. Les deux abandonnent, aucune sanction : Schumacher est champion pour 1 point." },
  { youtube: "https://www.youtube.com/watch?v=0AhNs_W5OQU", recap: "Jerez 1997", debut: 20, fin: 65,
    choix: ["Aucune pénalité", "Schumacher : 1 course de suspension", "Schumacher : exclu du championnat", "Villeneuve : disqualifié"], bonne: 2,
    reponse: "Schumacher : exclu du championnat", detail: "Schumacher tente de sortir Villeneuve pour le titre. La FIA l'exclut du championnat 1997 : il perd sa 2e place." }
];
