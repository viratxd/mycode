function getNumber() {
    var minNumber = 10; 
    var maxNumber = 100; 
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); 
    document.getElementById("share").innerHTML = randomnumber; 
    return false; 
}
