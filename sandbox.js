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

    // Referencing to sub-containers 3 and 4
    var inputQuery3 = document.querySelector("#third-div input[type='number']");
    var output3 = document.querySelector("#third-div p");
    var button3 = document.getElementById("button3");

    var inputQuery4 = document.querySelector("#fourth-div input[type='number']");
    var output4 = document.querySelector("#fourth-div p");
    var button4 = document.getElementById("button4");

    // Adding event listeners for third and fourth subcontainer
    button3.addEventListener("click", function(e){

        e.preventDefault();
        if(inputQuery3.value > 0){
            var number = inputQuery3.value / 3.2808;
            var n = number.toFixed(2);
            output3.textContent = inputQuery3.value + " feet" + " = " + n + " m";
        } else{
            alert("Only values larger than 0!");
        }

    });

    button4.addEventListener("click", function(e){

        e.preventDefault();
        if(inputQuery4.value > 0){
            var number = inputQuery4.value * 3.2808;
            var n = number.toFixed(2);
            output4.textContent = inputQuery4.value + " m" + " = " + n + " ft.";
        } else{
            alert("Only values larger than 0!");
        }

    });

    // Referencing to sub-containers 5 and 6
    var inputQuery5 = document.querySelector("#fifth-div input[type='number']");
    var output5 = document.querySelector("#fifth-div p");
    var button5 = document.getElementById("button5");

    var inputQuery6 = document.querySelector("#sixth-div input[type='number']");
    var output6 = document.querySelector("#sixth-div p");
    var button6 = document.getElementById("button6");

    // Adding event listeners for fifth and sixth subcontainer
    button5.addEventListener("click", function(e){

        e.preventDefault();
        if(inputQuery5.value > 0){
            var number = inputQuery5.value / 0.26417;
            var n = number.toFixed(2);
            output5.textContent = inputQuery5.value + " US gallons" + " = " + n + " L";
        } else{
            alert("Only values larger than 0!");
        }

    });

    button6.addEventListener("click", function(e){

        e.preventDefault();
        if(inputQuery6.value > 0){
            var number = inputQuery6.value * 0.26417;
            var n = number.toFixed(2);
            output6.textContent = inputQuery6.value + " L" + " = " + n + " US gallons";
        } else{
            alert("Only values larger than 0!");
        }

    });

}
