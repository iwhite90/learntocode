var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var nextRoundButton = document.getElementById('nextRoundButton');
var card1Index;
var acceptAnswer = true;

window.onload = function() {
  card1Index = getNextCard(card1);
  getNextCard(card2);

  card1.style.display = 'block';
}

function submitAnswer(div) {
  if (!acceptAnswer) {
    return;
  }
  // We need to find out which answer we've clicked on
  var card1Span = div.getElementsByTagName('span')[0];
  var answerClass = card1Span.className;
  
  card1Score = parseInt(card1Span.innerHTML);
  
  // Now we need to get the score for the same field from card 2
  var card2Score = parseInt(getElementByClassName(card2, 'span', answerClass).innerHTML);
  
  highlightFields(answerClass);
  finishRound(card1Score >= card2Score);
}

function highlightFields(answerClass) {
  var divs = document.getElementsByTagName('div');
  
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    
    if (div.className == 'stat' && div.getElementsByTagName('span')[0].className == answerClass) {
      div.style.border = '1px solid black';
      div.style.padding = '4px';
    }
  }
}

function clearHighlights() {
  var divs = document.getElementsByTagName('div');
  
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    
    if (div.className == 'stat') {
      div.style.border = '';
      div.style.padding = '5px';
    }
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
  
  acceptAnswer = false;
}

function startNextRound() {
  // Let's clear the highlights
  clearHighlights();
  
  // Hide card 2 and the button
  card2.style.display = 'none';
  nextRoundButton.style.display = 'none';
  
  // And get the next cards
  card1Index = getNextCard(card1);
  getNextCard(card2);
  
  acceptAnswer = true;
}

function getNextCard(oldCard) {
  var cardIndex = card1Index;
  
  while (cardIndex == card1Index) {
    cardIndex = Math.floor(Math.random() * cards.length);
  }
  
  var card = cards[cardIndex];
  
  setTitle(oldCard, card.title);
  setField(oldCard, 'intellect', card.intellect);
  setField(oldCard, 'strength', card.strength);
  setField(oldCard, 'cunning', card.cunning);
  setField(oldCard, 'age', card.age);
  setField(oldCard, 'haminess', card.haminess);
  
  getElementByClassName(oldCard, 'img', 'picture').setAttribute('src', '../images/' + card.img);
  
  return cardIndex;
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
  {"title": "Capt. Picard", "intellect": "10", "strength": "5", "cunning": "8", "age": "50", "haminess": "1", "img" : "picard.jpg"},
  {"title": "Capt. Kirk", "intellect": "5", "strength": "7", "cunning": "8", "age": "35", "haminess": "10", "img" : "kirk.jpg"},
  {"title": "Mr Spock", "intellect": "10", "strength": "8", "cunning": "6", "age": "160", "haminess": "8", "img" : "spock.jpg"},
  {"title": "Quark", "intellect": "7", "strength": "2", "cunning": "10", "age": "60", "haminess": "8", "img" : "quark.jpg"},
  {"title": "Q", "intellect": "5", "strength": "20", "cunning": "6", "age": "5000000", "haminess": "6", "img" : "q.jpg"},
  {"title": "Darth Vader", "intellect": "10", "strength": "9", "cunning": "8", "age": "25", "haminess": "3", "img" : "vader.jpg"},
  {"title": "The Borg", "intellect": "10", "strength": "9", "cunning": "9", "age": "4000", "haminess": "1", "img" : "borg.jpg"},
  {"title": "Riker", "intellect": "7", "strength": "6", "cunning": "9", "age": "45", "haminess": "9", "img" : "riker.jpg"}
]




