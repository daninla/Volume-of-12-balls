"use strict";

const DIAMETER_OF_SMALLEST_BALL = 0.5;
const WALL_OF_BALLS = 0.01;
let radius = DIAMETER_OF_SMALLEST_BALL / 2 - WALL_OF_BALLS;
let volume = 0;

for (let i = 0; i < 12; i++) {
  volume += (4 / 3) * Math.PI * radius ** 3;
  radius += WALL_OF_BALLS * 2;
}
console.log(`Об'єм: ${volume.toFixed(2)} метрів кубічних`);
