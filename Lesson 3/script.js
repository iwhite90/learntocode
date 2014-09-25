//alert('Hello');

//document.getElementById('card1').style.display = 'block';

var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');

card1.style.display = 'block';

function submitAnswer(div) {
  // We need to find out which answer we've clicked on
  var card1Span = div.getElementsByTagName('span')[0];
  var answerClass = card1Span.className;
  //console.log(answerClass);
  
  card1Score = parseInt(card1Span.innerHTML);
  //console.log(card1Score);
  
  // Now we need to get the score for the same field from card 2
  var card2Spans = card2.getElementsByTagName('span');
  var card2Score;
  
  for (var i = 0; i < card2Spans.length; i++) {
    var span = card2Spans[i];
    var spanClass = span.className;
    //console.log(spanClass);
    
    if (spanClass == answerClass) {
      card2Score = parseInt(span.innerHTML);
    }
  }
  
  var win;
  
  if (card1Score >= card2Score) {
    win = true;
  }
  else {
    win = false;
  }
  
  highlightFields(answerClass);
  finishRound(win);
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
  
  // Let's show the second card
  document.getElementById('card2').style.display = 'block';
  
  // And the next round button
  document.getElementById('nextRoundButton').style.display = 'block';
}




