function getFirstSelector(selector) {
  return document.querySelector(selector)
};

function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild(){
  return document.getElementById('grand-node').children[0].children[0].children[0].children[0]
}

function increaseRankBy(n){
  let list = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n)
  }
}