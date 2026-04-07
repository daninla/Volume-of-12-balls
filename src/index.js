"use strict";

const SMALLEST_OUTER_DIAMETER = 0.5;
const WALL_THICKNESS = 0.01;       

let totalVolume = 0;
let radius = (SMALLEST_OUTER_DIAMETER / 2) - WALL_THICKNESS;

for (let i = 0; i < 12; i++) {
  totalVolume += (4 / 3) * Math.PI * radius ** 3;
  radius += WALL_THICKNESS;
}

console.log(`Загальний внутрішній об'єм: ${totalVolume.toFixed(2)} метрів кубічних`);