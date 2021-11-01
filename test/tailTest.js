const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

//TEST CODE
(assertEqual(tail([5,6,7]),5));
(assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),"Labs"));
(assertEqual(tail(["Tania", "Adele", "Ellie", "Daisy"]),"Daisy"));
(assertEqual(tail(["carlito"]), "carlito"));
