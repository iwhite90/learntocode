//alert('Hello');

//document.getElementById('card1').style.display = 'block';

var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');

card1.style.display = 'block';

function submitIntellect() {
  //alert('Clicked on Intellect');
  
  // We need to get the intellect value of card 1
  var card1Spans = card1.getElementsByTagName('span');
  var card1Intellect;
  
  for (var i = 0; i < card1Spans.length; i++) {
    var span = card1Spans[i];
    var spanClass = span.className;
    //console.log(spanClass);
    
    if (spanClass == 'intellect') {
      card1Intellect = parseInt(span.innerHTML);
    }
  }
  //console.log(card1Intellect);
  
  // Then we need the intellect value of card 2
  var card2Spans = card2.getElementsByTagName('span');
  var card2Intellect;
  
  for (var i = 0; i < card2Spans.length; i++) {
    var span = card2Spans[i];
    var spanClass = span.className;
    //console.log(spanClass);
    
    if (spanClass == 'intellect') {
      card2Intellect = parseInt(span.innerHTML);
    }
  }
  
  var win;
  
  if (card1Intellect >= card2Intellect) {
    win = true;
  }
  else {
    win = false;
  }
  //console.log(win);
  
  finishRound(win);
}


function submitStrength() {
  var card1Spans = card1.getElementsByTagName('span');
  var card1Intellect;
  
  for (var i = 0; i < card1Spans.length; i++) {
    var span = card1Spans[i];
    var spanClass = span.className;
    
    if (spanClass == 'strength') {
      card1Intellect = parseInt(span.innerHTML);
    }
  }
  
  var card2Spans = card2.getElementsByTagName('span');
  var card2Intellect;
  
  for (var i = 0; i < card2Spans.length; i++) {
    var span = card2Spans[i];
    var spanClass = span.className;
    
    if (spanClass == 'strength') {
      card2Intellect = parseInt(span.innerHTML);
    }
  }
  
  var win;
  
  if (card1Intellect >= card2Intellect) {
    win = true;
  }
  else {
    win = false;
  }
  
  finishRound(win);
}


function submitCunning() {
  var card1Spans = card1.getElementsByTagName('span');
  var card1Intellect;
  
  for (var i = 0; i < card1Spans.length; i++) {
    var span = card1Spans[i];
    var spanClass = span.className;
    
    if (spanClass == 'cunning') {
      card1Intellect = parseInt(span.innerHTML);
    }
  }
  
  var card2Spans = card2.getElementsByTagName('span');
  var card2Intellect;
  
  for (var i = 0; i < card2Spans.length; i++) {
    var span = card2Spans[i];
    var spanClass = span.className;
    
    if (spanClass == 'cunning') {
      card2Intellect = parseInt(span.innerHTML);
    }
  }
  
  var win;
  
  if (card1Intellect >= card2Intellect) {
    win = true;
  }
  else {
    win = false;
  }
  
  finishRound(win);
}


function submitAge() {
  var card1Spans = card1.getElementsByTagName('span');
  var card1Intellect;
  
  for (var i = 0; i < card1Spans.length; i++) {
    var span = card1Spans[i];
    var spanClass = span.className;
    
    if (spanClass == 'age') {
      card1Intellect = parseInt(span.innerHTML);
    }
  }
  
  var card2Spans = card2.getElementsByTagName('span');
  var card2Intellect;
  
  for (var i = 0; i < card2Spans.length; i++) {
    var span = card2Spans[i];
    var spanClass = span.className;
    
    if (spanClass == 'age') {
      card2Intellect = parseInt(span.innerHTML);
    }
  }
  
  var win;
  
  if (card1Intellect >= card2Intellect) {
    win = true;
  }
  else {
    win = false;
  }
  
  finishRound(win);
}


function submitHaminess() {
  var card1Spans = card1.getElementsByTagName('span');
  var card1Intellect;
  
  for (var i = 0; i < card1Spans.length; i++) {
    var span = card1Spans[i];
    var spanClass = span.className;
    
    if (spanClass == 'haminess') {
      card1Intellect = parseInt(span.innerHTML);
    }
  }
  
  var card2Spans = card2.getElementsByTagName('span');
  var card2Intellect;
  
  for (var i = 0; i < card2Spans.length; i++) {
    var span = card2Spans[i];
    var spanClass = span.className;
    
    if (spanClass == 'haminess') {
      card2Intellect = parseInt(span.innerHTML);
    }
  }
  
  var win;
  
  if (card1Intellect >= card2Intellect) {
    win = true;
  }
  else {
    win = false;
  }
  
  finishRound(win);
}

function finishRound(win) {
  // Get the num and den values
  var numSpan = document.getElementById('num');
  var denSpan = document.getElementById('den');
  
  var numValue = parseInt(numSpan.innerHTML);
  var denValue = parseInt(denSpan.innerHTML);
  
  if (win) {
    numSpan.innerHTML = numValue + 1;
  }
  
  denSpan.innerHTML = denValue + 1;
}

