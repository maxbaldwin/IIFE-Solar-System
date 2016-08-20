// 1. public property for holding the last modified date (everyone can see it, not hidden, 
// accesible, inside of return) DONE
// 2. write a getter/setter for planets (private variable) DONE
// 3. getter DONE/setter for activeSpaceCraft
// 4. getter DONE/setter for planetsLandedOn
// 6 functions, 7 total returned lines

var SolarSystem = (function(){
  var planets = ["Mercuy", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Neptune", "Uranus", "Pluto"]; 
  var activeSpaceCraft = [];
  var planetsLandedOn = 0; 
  
  return{
    lastDate: new Date(),
    getplanets: function(){
      return planets;
    },
    setPlanets: function(newPlanet){
      planets.push(newPlanet);
    },
    getactiveSpaceCraft: function(){
      return activeSpaceCraft;
    },
    setActiveSpaceCraft: function(newSpacecraft){
      activeSpaceCraft.push(newSpacecraft);
    },
    getplanetsLandedOn: function(){
      return planetsLandedOn;
    }, 
    setPlanetsLandedOn: function(numLanded){
      planetsLandedOn = numLanded;
    }
  };
})();

