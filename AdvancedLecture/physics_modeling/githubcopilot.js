// write a simulation of the solar system in javascript

// create a class for the planets

class Planet {
  constructor(name, radius, distance, speed, color) {
    this.name = name;
    this.radius = radius;
    this.distance = distance;
    this.speed = speed;
    this.color = color;
  }
}

// create an array of planets

var planets = [
  new Planet("Mercury", 0.38, 0.39, 0.24, "#C0C0C0"),
  new Planet("Venus", 0.95, 0.72, 0.62, "#FFA500"),
  new Planet("Earth", 1, 1, 1, "#0000FF"),
  new Planet("Mars", 0.53, 1.52, 1.88, "#FF0000"),
  new Planet("Jupiter", 11.2, 5.20, 11.86, "#FFA500"),
  new Planet("Saturn", 9.45, 9.58, 29.46, "#C0C0C0"),
  new Planet("Uranus", 4.01, 19.20, 84.01, "#0000FF"),
  new Planet("Neptune", 3.88, 30.05, 164.79, "#0000FF")
];

// create a class for the sun

class Sun {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
}

// create a sun

var sun = new Sun(109, "#FFFF00");

// create a class for the solar system

class SolarSystem {
  constructor(planets, sun) {
    this.planets = planets;
    this.sun = sun;
  }
}