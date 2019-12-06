// alert welcoming user to page//
var generateButton = document.getElementById('generator')
var copyButton = document.getElementById('copy')

var characters = ['1', '2', '3', '4', '5', '6', '7','8','9','0'] //890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&()*+,-./:;<=>?@[]^_`{|}~'
var newpw = ""
var generatePw = function (event) {
    let pwlenght = document.getElementById('textarea').value;
    console.log(pwlenght)
    if (pwlenght >= 8 && pwlenght <= 128) {
        for (var i = 0; i < pwlenght; i++) {
            newpw += characters[(Math.floor(Math.random() * characters.length))];
        }
        alert("  your new password   " + newpw)
    } else {
        alert("please choose a number between 8-128")
        location.reload()

    }
}
 generateButton.addEventListener('click',generatePw)
    console.log(newpw)
    console.log(pwlenght)
    // pwgenerator( pwlenght,special ) 
    // let specialCha =
    //promt asking for user pw lenght imput/
    //  pwlenght = {
    // takes password imput and puts into password//
