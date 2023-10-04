"use strict";

const assert = require("assert").strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10,
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20,
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30,
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35,
  },
];

function iterateSimple() {
  //iterar e imprimir los pilotos utilizando un for “normal”
  for (let i = 0; i < pilots.length; i++) {
    console.log(pilots[i]["name"]);
  }
}
function iterateForEach() {
  //iterar e imprimir los pilotos utilizando array.forEach
  pilots.forEach((piloto) => {
    console.log(piloto["name"]);
  });
}
function mapIds() {
  //devolver un array con los id’s de los pilotos utilizando map
  return pilots.map((piloto) => piloto["id"]);
}
function rebels() {
  //devolver únicamente los pilotos rebeldes, utilizando la función filter
  return pilots.filter((piloto) => piloto["faction"] == "Rebels");
}
function totalFaction(faction) {
  //devolver el número de pilotos de una determinada facción
  let numeroPilotos = 0;
  pilots.forEach((piloto) => {
    if (piloto["faction"] == faction) {
      numeroPilotos++;
    }
  });
  return numeroPilotos;
}
function avgYears(faction) {
  //calcular la media de edad de los pilotos de una facción
  let edadMedia = 0;
  let numeroPilotos = 0;
  pilots.forEach((piloto) => {
    if (piloto["faction"] == faction) {
      numeroPilotos++;
      edadMedia = (edadMedia + piloto["years"]) / numeroPilotos;
    }
  });
  return edadMedia;
}

// use console.log
// iterateSimple()
// iterateForEach()
try {
  assert.deepStrictEqual(mapIds(), [2, 8, 40, 66]);
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]]);

  assert.deepStrictEqual(totalFaction("Rebels"), 2);

  assert.deepStrictEqual(avgYears("Rebels"), 22.5);
  assert.deepStrictEqual(avgYears("Empire"), 25);
} catch (error) {
  console.error(error);
}
