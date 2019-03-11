/****************************   What I want  *********************
  A user can enter loan Amount ,interest and years of pay ,
  This calculator should calculate the interestpayment ,
   Monthyly emi, and total amount(interes + amount).



Step 01. get the form value in variables from 2 fields
step 02. add Click eventlistners on form 
step 03. do calculation using formulas
step 04. show results in fields

Thanks &hearts;




******************************************************************/

// make variables

const form = document.getElementById('bill-form');


// Add eventListner

form.addEventListener('submit',calculateTip);


// Calculate Loan


function calculateTip(e) {

    const amount = document.getElementById('amount').value;
    const service = document.getElementById('service').value;
    const people = document.getElementById('people').value;
    const tip = document.getElementById('tip');


     //Calculate tip
  let total = (amount * service) / people;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);


     if(isFinite(total)){

        tip.innerText = total;
       
        document.getElementById('results').style.display = 'block';
    
    }else{

        // alert('Please Check Your No.');

        showError('Please Check Your No.');

     }




     e.preventDefault();
  
}


// showerror


function showError(error) {

    document.getElementById('results').style.display = 'none';

const errorDiv = document.createElement('div');

// get elements 
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

errorDiv.className = 'alert alert-danger';

errorDiv.appendChild(document.createTextNode(error));

// insert error
card.insertBefore(errorDiv , heading);

// clear error
setTimeout(clearError , 3000);
    
}

// clear function

function clearError(){
    document.querySelector('.alert').remove();
}