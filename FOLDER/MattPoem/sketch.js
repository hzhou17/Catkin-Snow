var words;

function preload() {
  words = loadJSON("words.json");
}

function setup() {
  createCanvas(600,300);
  background(200);
  fill(0);

  var art = words.article;
  var adj = words.adjs[0];
  var noun = words.nouns[0];
  var verb = words.verbs[0];
  var adv = words.advs[0];
  var sentence = art+" "+adj+" "+noun+" "+verb+" "+adv;
  text(sentence, 10,20);
  
  var y = 40;
  for(var i=0; i<words.nouns.length; i++) {
    for(var j=0; j<words.verbs.length; j++) {
      text(words.nouns[i]+" "+words.verbs[j], 10, y);
      y += 20;
    }
  }
  
}