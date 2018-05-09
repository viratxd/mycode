function getNumber() {
    var minNumber = 50; 
    var maxNumber = 200; 
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); 
    document.getElementById("share").innerHTML = randomnumber; 
    return false; 
}
window.onload = getNumber;
