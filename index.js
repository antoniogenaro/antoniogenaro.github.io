var whatiam = [
  'developer',
  'lucas\'s_dad',
  'kebab_expert',
  'gamer',
  'cat_lover'
];

for (var i = 0; i < whatiam.length; i++) {
  var text = (i > 0 ? ' | ' : '') + whatiam[i];
  document.getElementById('whatiam').innerHTML += text;
}