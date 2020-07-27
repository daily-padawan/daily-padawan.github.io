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