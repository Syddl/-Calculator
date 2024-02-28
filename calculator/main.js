let calculation = localStorage.getItem('calculation') || '';


function pressBTN(value){

    calculation += value;
    
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function displayCalculation(){
    document.getElementById('screen').innerHTML = calculation;
}

