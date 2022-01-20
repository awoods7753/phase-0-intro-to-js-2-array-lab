// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function appendCat(name) {
   var appendCat2 = [...cats,name];
   return appendCat2
}
function prependCat(name) {
    var prependCat2 = [name, ...cats]
    return prependCat2
}
function removeLastCat(name) {
    var removeLastCat2 = cats.slice(0,cats.length-1)
    return removeLastCat2
}
function removeFirstCat(name) {
    var removeFirstCat2 = cats.slice(1)
    return removeFirstCat2
}