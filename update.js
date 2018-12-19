
function fun1(){     var minNumber = 1600;      var maxNumber = 5000;      var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);      document.getElementById("view").innerHTML = randomnumber;      return false;}

function fun2(){     var minNumber = 10;      var maxNumber = 200;      var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);      document.getElementById("sharing").innerHTML = randomnumber;      return false;  } 

function fun3() {
  var Names = ["Shreya Pandey", "Jyoti",  "Priya Mehta", "Sonali Patel", "Riya Mishra", "Virat Choudhary", "Rahul Sharma", "Aryan Gupta", "Ranveer","Pia Gupta", "Nitika Singh", "Jasleen", "Dilpreet", "Manleen Kour" ],
    existing = document.getElementById("textbox").innerHTML.trim(),
    displayNames;
  do {
    displayNames = Names[Math.floor(Math.random() * Names.length)]
  } while (displayNames == existing)


  document.getElementById("textbox").innerHTML = displayNames;
} 

var addFunctionOnWindowLoad = function(callback){
      if(window.addEventListener){
          window.addEventListener('load',callback,false);
      }else{
          window.attachEvent('onload',callback);
      }
}

addFunctionOnWindowLoad(fun1);
addFunctionOnWindowLoad(fun2);
addFunctionOnWindowLoad(fun3);
