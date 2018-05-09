
function fun1(){     var minNumber = 600;      var maxNumber = 2000;      var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);      document.getElementById("view").innerHTML = randomnumber;      return false;}

function fun2(){     var minNumber = 150;      var maxNumber = 300;      var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);      document.getElementById("sharing").innerHTML = randomnumber;      return false;  } 

var addFunctionOnWindowLoad = function(callback){
      if(window.addEventListener){
          window.addEventListener('load',callback,false);
      }else{
          window.attachEvent('onload',callback);
      }
}

addFunctionOnWindowLoad(fun1);
addFunctionOnWindowLoad(fun2);
