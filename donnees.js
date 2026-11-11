// Commissaires FIA : on montre un incident réel, il faut deviner la décision des commissaires.
// bonne : numéro du bon choix dans la liste (0 = A, 1 = B, 2 = C…).
// debut / fin : en secondes. Les clips sont coupés avant les écrans de fin.
//
// ⚠ À écouter avant le live : un commentateur peut annoncer la sanction dans certains clips.

window.JEU = {
  cle: "commissaires-fia",
  titre: "Commissaires",
  accent: "FIA",
  question: "Quelle décision des commissaires ?",
  unite: "Incident",
  icone: "⚖",
  pauseLegere: true,     // en pause on garde l'image visible pour revoir l'action
  zoom: 1.2,
  finTexte: "À vous de juger",
  choix: ["Aucune pénalité", "5 secondes", "10 secondes", "Stop & Go", "Pénalité sur la grille"]
};

// Pas de niveaux ici : chaque bonne réponse vaut 1 point.

window.ELEMENTS = [
  { youtube: "https://www.youtube.com/watch?v=Jk45D_OULQA", recap: "Silverstone 2021", reponse: "10 secondes", bonne: 2,
    detail: "Hamilton, jugé principal responsable du contact avec Verstappen à Copse. Il gagnera quand même la course.", debut: 0, fin: null },
  { youtube: "https://www.youtube.com/watch?v=FIZC2zPHW14", recap: "Monza 2021", reponse: "Pénalité sur la grille", bonne: 4,
    detail: "Verstappen recule de 3 places sur la grille du GP suivant (Russie) pour l'accrochage avec Hamilton.", debut: 0, fin: null },
  { youtube: "https://www.youtube.com/watch?v=3bX1Y_7WfVg", recap: "Djeddah 2021", reponse: "10 secondes", bonne: 2,
    detail: "Verstappen, jugé principal responsable du contact après avoir freiné brusquement devant Hamilton.", debut: 0, fin: null },
  { youtube: "https://www.youtube.com/watch?v=izoZa29AyWI", recap: "Montréal 2019", reponse: "5 secondes", bonne: 1,
    detail: "Vettel, pour retour dangereux en piste devant Hamilton. Il franchit la ligne en tête mais perd la victoire.", debut: 0, fin: 25 },
  { youtube: "https://www.youtube.com/watch?v=gRtOdvDh3ds", recap: "Interlagos 2019", reponse: "5 secondes", bonne: 1,
    detail: "Hamilton, pour avoir provoqué l'accrochage avec Albon. Il perd le podium au profit de Sainz.", debut: 3, fin: 29 },
  { youtube: "https://www.youtube.com/watch?v=UxkubpwHhtY", recap: "Bakou 2017", reponse: "Stop & Go", bonne: 3,
    detail: "Vettel, 10 secondes de stop & go pour avoir percuté volontairement Hamilton sous voiture de sécurité.", debut: 0, fin: 48 },
  { youtube: "https://www.youtube.com/watch?v=liMXN3VwoM0", recap: "Abu Dhabi 2021", reponse: "Aucune pénalité", bonne: 0,
    detail: "Hamilton coupe le virage 6 au 1er tour. Les commissaires estiment qu'il a rendu l'avantage : pas d'enquête.", debut: 0, fin: null },
  { youtube: "https://www.youtube.com/watch?v=215_Imoqgic", recap: "Interlagos 2021", reponse: "Aucune pénalité", bonne: 0,
    detail: "Verstappen pousse Hamilton hors de la piste au virage 4. Les commissaires ne lancent même pas d'enquête.", debut: 0, fin: null }
];
