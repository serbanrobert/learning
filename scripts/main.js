function dialog(msg) {
  var d = document.createElement("div")
  d.innerHTML = msg
  d.setAttribute("class", "dialog")
  document.body.appendChild(d)
}

function run(name, age) {
  dialog(name);
  dialog(age);
}

setTimeout(function () {
  run('Viki', 22);
}, 2000)

setTimeout(function () {
  run('Robi', 21);
  run('Balazs', 25);
}, 1000)
