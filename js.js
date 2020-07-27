function shuffle(array, seed) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  seed = seed || 1;
  let random = function () {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var list = [
  "Kauê e Vitor",  
  "Gabriel Arno/Joni",
  "Lucas e Victor",
  "Tomás e Israel",
  "Barbara e Mabel",
  "Ju e Gabi",
  "Miguel e Stefan",
  "Anne",
  "Mayara",
  "Pedro e Thiago",
  "Arthur e Mike",
  "Carlos e Raphael",
  "Moisés e João",
  "Juvens e Gabriel K",
  "Carol e Willian",
  "Natan e Jonas",
  "Vinícius e Eduardo",
  "Luiz e Natanael",
  "Mateus e Matheus",
  "Nathalie",
]
const half = Math.ceil(list.length / 2);    

const firstHalf = list.splice(0, half)
const secondHalf = list.splice(-half)

firstHalf.forEach(function (dupla) {
  var el = document.getElementById('group1')
  var duplaLi = document.createElement('li')
  duplaLi.className = 'list-group-item'
  duplaLi.innerHTML = dupla
  el.appendChild(duplaLi)
})

secondHalf.forEach(function (dupla) {
  var el = document.getElementById('group2')
  var duplaLi = document.createElement('li')
  duplaLi.className = 'list-group-item'
  duplaLi.innerHTML = dupla
  el.appendChild(duplaLi)
})