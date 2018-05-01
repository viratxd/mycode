function getNumber() {
    var minNumber = 100; 
    var maxNumber = 1000; 
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); 
    document.getElementById("view").innerHTML = randomnumber; 
    return false; 
}
window.onload = getNumber;
