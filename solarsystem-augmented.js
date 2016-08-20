// 1. getter/setter for closest stars to the sun
// 2. getter/setter for age of our solar system
// 3. getter/setter for known dwarf planets
// 6 functions!

var SolarSystem = (function(newSolarSystem){
  var closestStars = ["Alpha Centauri"];
  var ageOfSolarSystem = 0; 
  var dwarfPlanets = ["Pluto"];  

newSolarSystem.getclosestStars = function(){
  return closestStars;
};
newSolarSystem.setclosestStars = function(newClosestStar){
  closestStars.push(newClosestStar);
};
newSolarSystem.getageOfSolarSystem = function(){
  return ageOfSolarSystem;
};
newSolarSystem.setageOfSolarSystem = function(newAge){
  ageOfSolarSystem = newAge;
};
newSolarSystem.getdwarfPlanets = function(){
  return dwarfPlanets;
};
newSolarSystem.setcdwarfPlanets = function(newDwarfPlanet){
  dwarfPlanets.push(newDwarfPlanet); 
}

  return newSolarSystem;
})(SolarSystem || {});