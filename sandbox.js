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

}