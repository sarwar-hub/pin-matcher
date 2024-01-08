// genarate random pin
function genaratePin() {
    const randomPin = Math.round(Math.random()*10000);
    return randomPin;
}

// make pin in 4 digit
function pin4Digit() {
    const pin = genaratePin();
    const stringPin = pin + ''; // make it string to get its length

    if (stringPin.length == 4) {
        return pin;
    } else {
        return make4Digit();
    }
}



// set event to genarate button
document.getElementById('genarate-button').addEventListener('click', function(){
    const pin = pin4Digit();
    const container = document.getElementById('genarated-pin-display');
    container.value = pin;
})


// add event to numbers 
document.getElementById('calculator-body').addEventListener('click', function(event){
    const valueOfButton = event.target.innerText;
    const display = document.getElementById('display');

    
    if (isNaN(valueOfButton)) {
        if (valueOfButton === 'C') {
            display.value = '';
        }
        else if (valueOfButton === '<') {
            const prevValue = display.value;
            const splitValue = prevValue.split('');
            splitValue.pop();
            display.value = splitValue.join('');
        }
    }
   
    else {
        const prevValue = display.value;
        const newValue = prevValue + valueOfButton;
        display.value = newValue;

    }

})




// Pin matcher

document.getElementById('match-pin').addEventListener('click', function(){
    const genaratedPinContainer = document.getElementById('genarated-pin-display');
    const genaratedPin = genaratedPinContainer.value;

    const inputedPinContainer = document.getElementById('display');
    const inputedPin = inputedPinContainer.value;

    const correct = document.getElementById('correct');
    const incorrect = document.getElementById('incorrect');

    if (genaratedPin === inputedPin) {
        correct.style.display = 'block';
        incorrect.style.display = 'none';
    } 
    else {
        correct.style.display = 'none';
        incorrect.style.display = 'block';
    }
})