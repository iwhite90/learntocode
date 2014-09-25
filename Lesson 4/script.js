var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var nextRoundButton = document.getElementById('nextRoundButton');

card1.style.display = 'block';

function submitAnswer(div) {
  // We need to find out which answer we've clicked on
  var card1Span = div.getElementsByTagName('span')[0];
  var answerClass = card1Span.className;
  
  card1Score = parseInt(card1Span.innerHTML);
  
  // Now we need to get the score for the same field from card 2
  var card2Score = parseInt(getElementByClassName(card2, 'span', answerClass).innerHTML);
  
  highlightFields(answerClass);
  // LESSON 4: We don't need the win variable
  finishRound(card1Score >= card2Score);
}

function highlightFields(answerClass) {
  var spans = document.getElementsByTagName('span');
  
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    
    if (span.className == answerClass) {
      span.style.color = 'red';
      span.style.fontWeight = 'bold';
    }
  }
}

function clearHighlights() {
  var spans = document.getElementsByTagName('span');
  
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    
    span.style.color = 'black';
    span.style.fontWeight = 'normal';
  }
}


function finishRound(win) {
  // Get the num and den values
  var numSpan = document.getElementById('num');
  var denSpan = document.getElementById('den');
  
  var numValue = parseInt(numSpan.innerHTML);
  
  if (win) {
    numSpan.innerHTML = numValue + 1;
  }
  
  denSpan.innerHTML = parseInt(denSpan.innerHTML) + 1;
  
  // Let's show the second card
  document.getElementById('card2').style.display = 'block';
  
  // And the next round button
  nextRoundButton.style.display = 'block';
}

function startNextRound() {
  // Let's clear the highlights
  clearHighlights();
  
  // Hide card 2 and the button
  card2.style.display = 'none';
  nextRoundButton.style.display = 'none';
  
  // And get the next cards
  //getNextCards();
  getNextCard(card1);
  getNextCard(card2);
}
/*
function getNextCards() {
  var card = cards[nextCard];
  setTitle(card1, 'Mr Spock');
  setField(card1, 'intellect', '10');
  setField(card1, 'strength', '7');
  setField(card1, 'cunning', '6');
  setField(card1, 'age', '160');
  setField(card1, 'haminess', '8');

  setTitle(card2, 'Quark');
  setField(card2, 'intellect', '7');
  setField(card2, 'strength', '2');
  setField(card2, 'cunning', '10');
  setField(card2, 'age', '60');
  setField(card2, 'haminess', '8');
}
*/

function getNextCard(oldCard) {
  var card = cards[nextCard];
  setTitle(oldCard, card.title);
  setField(oldCard, 'intellect', card.intellect);
  setField(oldCard, 'strength', card.strength);
  setField(oldCard, 'cunning', card.cunning);
  setField(oldCard, 'age', card.age);
  setField(oldCard, 'haminess', card.haminess);
  
  nextCard++;
}

function setTitle(card, title) {
  getElementByClassName(card, 'div', 'title').innerHTML = title;
}

function setField(card, field, value) {
  getElementByClassName(card, 'span', field).innerHTML = value;
}

function getElementByClassName(root, tagName, className) {
  var elems = root.getElementsByTagName(tagName);
  
  for (var i = 0; i < elems.length; i++) {
    if (elems[i].className == className) {
      return elems[i];
    }
  }
}

var cards = [
  {"title": "Mr Spock", "intellect": "10", "strength": "7", "cunning": "6", "age": "160", "haminess": "8"},
  {"title": "Quark", "intellect": "7", "strength": "2", "cunning": "10", "age": "60", "haminess": "8"}
]

var nextCard = 0;




