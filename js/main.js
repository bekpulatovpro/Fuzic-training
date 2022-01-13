var elForm = document.querySelector(".fuzic__form");
var elInput = document.querySelector(".fuzic__input");
var elResult=document.querySelector(".result");
var elResult1 = document.querySelector(".result1");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");
// t=s/v
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var fuzicInput=elInput.value.trim();
    var VHuman=3.6;
    var VBysicle=20.1;
    var VCar=70;
    var VAirplane=800;

    function hourToMinute(minute){
        var hour=Math.floor(fuzicInput/minute);
        var minute=Math.floor(((fuzicInput/minute)-hour)*60);
        return hour +" soat " +minute+" minute"
    }

    if(isNaN(fuzicInput)){
        elResult.textContent="Please, enter number"
    }
    else if(fuzicInput){
        elResult1.textContent=hourToMinute(VHuman);
        elResult2.textContent=hourToMinute(VBysicle);;
        elResult3.textContent=hourToMinute(VCar);;
        elResult4.textContent=hourToMinute(VAirplane);;
    }
});