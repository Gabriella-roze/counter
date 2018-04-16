let plusOne = document.getElementById('btnPlus');
let minusOne = document.getElementById('btnMinus');
let resetNr = document.getElementById('btnReset');
let addNr = document.getElementById('btnAdd');
let display = document.getElementById('current');
let currentNr = 0;

plusOne.addEventListener('click', function(){
  currentNr += 1;
  display.innerHTML = currentNr;
});

minusOne.addEventListener('click', function(){
  currentNr -= 1;
  display.innerHTML = currentNr;
});

resetNr.addEventListener('click', function(){
  currentNr = 0;
  display.innerHTML = currentNr;
});

addNr.addEventListener('click', function(){
  if (isNaN(parseFloat(nrInput.value))) { return; };
  currentNr = currentNr + parseFloat(nrInput.value);
  display.innerHTML = currentNr.toFixed(2);
});
