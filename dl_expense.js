"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Gabriel Hernandez
   Date: 4/18/19   
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/

//set up the page by calling the functions that will be called later
window.onload = function() {
      var changingCells = document.querySelectorAll('input[class="sum"]');
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp; 
      }
      document.getElementById("submitButton").onclick = validateSummary;
};

//validates the data entry in the summary field
function validateSummary() {
      var summary = document.getElementById("summary");
      if (summary.validity.valueMissing) {
            summary.setCustomValidity("You must include a summary of the trip in your report.");
      } else {
            summary.setCustomValidity("");
      }
}


//sums the values of input elements belonging to the sumClass of elements
function calcClass(sumClass) {
      var sumFields = document.getElementsByClassName("sumClass");
      var sumTotal = 0;

      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields[i].value);
            if (!isNaN(itemValue)) {
                  sumTotal += itemValue;
            }
      }
      return sumTotal;
}

//Calculates the travel expenses from all categories and dates.
function calcExp() {
      var expTable = document.querySelectorAll("table#tavelTable tbody tr");
      for (var i = 0; i < expTable.length; i++) {
            document.getElementById("subtotal"+[i]) = calcClass(date[i]);
            //step 8b.
      }
}






function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}