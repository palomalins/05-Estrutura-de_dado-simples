let animes =["Koe no Katashi", "Shingeki no Kyojin", "Fullmetal Alchemist", "Kakegurui XX", "Hunter X Hunter"]
console.log(animes)
animes.unshift("Diabolick Lovers")
//Diabolick Lovers é MUITO ruim
console.log(animes)
animes.pop()
console.log(animes)
animes.push("Jujutsu Kaisen", "Tokyo Ghoul")
console.log(animes)
animes.shift()
console.log(animes)

const numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers)
numbers.sort()
 console.log(numbers.sort())
 numbers.sort(function(a,b){
     return(a-b)
 })