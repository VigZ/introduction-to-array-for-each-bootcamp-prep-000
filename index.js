function iterativeLog(array) {
 array.forEach((element, index) => {
 console.log(`${index}: ${element}`)
 })
 }
 
 function iterate(callback) {
  let animals = ['pig', 'rabbit', 'octopus', 'turtle', 'cat']
  animals.forEach(callback)
  return animals
 }
 
 function doToArray(array, callback) {
   array.forEach(callback)
 }