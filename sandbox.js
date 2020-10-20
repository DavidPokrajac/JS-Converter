window.onload = function(){

    // Referencing to sub-containers 1 and 2
    var inputQuery1 = document.querySelector("#first-div input[type='number']");
    var output1 = document.querySelector("#first-div p");
    var button1 = document.getElementById("button1");

    var inputQuery2 = document.querySelector("#second-div input[type='number']");
    var output2 = document.querySelector("#second-div p");
    var button2 = document.getElementById("button2");

    // Referencing reset input and adding event listener to it
    var reset = document.querySelectorAll("input[type='reset']");
    reset.forEach(function(res){
       res.addEventListener("click", function(e){
           e.target.previousElementSibling.previousElementSibling.value = "";
           e.target.nextElementSibling.innerHTML = "";
       });
   });

   // Adding event listeners for first and second subcontainer
   button1.addEventListener("click", function(e){

        e.preventDefault();
        if(inputQuery1.value > 0){
            var number = inputQuery1.value * 0.45359237;
            var n = number.toFixed(2);
            output1.textContent = inputQuery1.value + " lbs" + " = " + n + " kg";
        } else{
            alert("Only values larger than 0!");
        }

    });

    button2.addEventListener("click", function(e){

        e.preventDefault();
        if(inputQuery2.value > 0){
            var number = inputQuery2.value / 0.45359237;
            var n = number.toFixed(2);
            output2.textContent = inputQuery2.value + " kg" + " = " + n + " lbs";
        } else{
            alert("Only values larger than 0!");
        }

    });

}
