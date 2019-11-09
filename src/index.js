const cityData = require("all-the-cities")
const airport = require("airport-data")

// console.log(cityData.filter(e => e.country === "US" || e.country === "ES"))
// console.log(cityData.filter(e => e.country === "US" || e.country === "ES").length)
// console.log(true == 1)
// console.log(false == 0)
// if("false"){
//     console.log('ibfvahekvhdvbhdvdbv')
// }

// console.log(cityData.find(e => e.name === "Chengdu"))
// console.log(cityData.filter(e => e.loc.coordinates[1] > 0))

console.log(airport.filter(e => e.city === "Toronto" && e.country === "Canada"))