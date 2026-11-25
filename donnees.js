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
  { youtube: "https://www.youtube.com/watch?v=oepEuQKjjmU", recap: "Melbourne 2008", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Barrichello : 10 secondes", "Barrichello : disqualifié", "Barrichello : Stop & Go"], bonne: 2,
    reponse: "Barrichello : disqualifié", detail: "Pendant la voiture de sécurité, Barrichello sort des stands alors que le feu est rouge. Il finit 6e… puis il est disqualifié." },
  { youtube: "https://www.youtube.com/watch?v=dla65PfyD-E", recap: "Adélaïde 1994", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Schumacher : disqualifié", "Schumacher : exclu du championnat", "Hill : 10 secondes"], bonne: 0,
    reponse: "Aucune pénalité", detail: "Schumacher touche le mur puis percute Hill. Les deux abandonnent, aucune sanction : Schumacher est champion pour 1 point." },
  { youtube: "https://www.youtube.com/watch?v=0AhNs_W5OQU", recap: "Jerez 1997", debut: 20, fin: 65,
    choix: ["Aucune pénalité", "Schumacher : 1 course de suspension", "Schumacher : exclu du championnat", "Villeneuve : disqualifié"], bonne: 2,
    reponse: "Schumacher : exclu du championnat", detail: "Schumacher tente de sortir Villeneuve pour le titre. La FIA l'exclut du championnat 1997 : il perd sa 2e place." },
  { youtube: "https://www.youtube.com/watch?v=5-Q48Zu9vXI", recap: "Monaco 2010", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Schumacher : 20 secondes", "Schumacher : disqualifié", "Alonso : 5 secondes"], bonne: 1,
    reponse: "Schumacher : 20 secondes", detail: "Schumacher passe Alonso au dernier virage, juste quand la voiture de sécurité rentre. C'était interdit : 20 secondes, il passe de 6e à 12e." },
  { youtube: "https://www.youtube.com/watch?v=9s8X-vfFiC4", recap: "Monaco 2017", debut: 0, fin: null,
    choix: ["Aucune pénalité", "Button : 5 secondes", "Button : 3 places sur la grille", "Wehrlein : 3 places sur la grille"], bonne: 2,
    reponse: "Button : 3 places sur la grille", detail: "Button, qui remplace Alonso, plonge à l'intérieur de Wehrlein et met la Sauber sur le côté. 3 places de pénalité… pour une course qu'il ne fera jamais." }
];
