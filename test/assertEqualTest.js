const assertEqual = require('../assertEqual');

assertEqual(tail([5,6,7]), "5");
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Yo Yo");
assertEqual(tail(["Tania", "Adele", "Ellie", "Daisy"]), "Tania");
assertEqual(tail(["carlito"]), "carlito");