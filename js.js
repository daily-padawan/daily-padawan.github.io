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

var duplas = [
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

var actualGroup = 1

for (let index = 0; index < duplas.length; index++) {
  var el = document.getElementById('group' + actualGroup)
  var duplaLi = document.createElement('li')
  duplaLi.className = 'list-group-item'
  duplaLi.innerHTML = duplas[index]
  el.appendChild(duplaLi)

  if (actualGroup === 4) {
    actualGroup = 0
  }

  actualGroup++;
}

var curr = new Date;
var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
console.log(shuffle(duplas, firstday.getDate()))