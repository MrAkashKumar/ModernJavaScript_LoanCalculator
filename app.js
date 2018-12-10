// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', 
function(e){


    document.getElementById('results').style.display = 'none';


    document.getElementById('loading').style.display = 'block';



    setTimeout(calculateResult, 2000);

    e.preventDefault();
});

//Calculate Results
function calculateResult(){
   console.log('Calculating....');

   const amount = document.getElementById('amount');
   const interest = document.getElementById('Intrest');
   const years = document.getElementById('years');
   const monthlyPayment = document.getElementById('monthly-payment');
   const totalPayment = document.getElementById('total-payment');
   const totalInterest = document.getElementById('total-intrest');

   const principal = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value)/100/12;
   const calculatedPayment = parseFloat(years.value)*12;

   //compute monthly Payment
   const x = Math.pow(1 + calculatedInterest, calculatedPayment);
   const monthly = (principal*x*calculatedInterest/(x-1));

   if(isFinite(monthly)){
       monthlyPayment.value = monthly.toFixed(2);
       totalPayment.value = (monthly* calculatedPayment).toFixed(2);
       totalInterest.value = ((monthly*calculatedPayment)-principal).toFixed(2);


        document.getElementById('results').style.display = 'block';


        document.getElementById('loading').style.display = 'none';
   }else{
       //console.log('Please check your numbers');
       showError('Please check your numbers');
   }
   // e.preventDefault();
}

// Show error 

function showError(error){


    document.getElementById('results').style.display = 'none';


    document.getElementById('loading').style.display = 'none';


    const errorDiv = document.createElement('div');

   
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')


    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));


    card.insertBefore(errorDiv, heading);


    setTimeout(clearError, 3000);

}
 
    //Clear error
function clearError(){
    document.querySelector('.alert').remove();
}