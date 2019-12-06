//1st prompt 8-128 takes user password lenghth prefrecence and inputs into next function//
alert("Hello Welcome to the random password generator")
let pwlenght = prompt(" How many characters would you like your password to be?");
let characters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&()*+,-./:;<=>?@[]^_`{|}~'
let newpw = ""
if (pwlenght >= 8 && pwlenght <= 128) {
    for (var i = 0; i < pwlenght; i++) {
        newpw += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    alert("  your new password   "+ newpw )
} else {
    alert("please choose a number between 8-128")
    location.reload()

}

console.log(newpw)
console.log(pwlenght)
//2nd prompt how many special characters do you want//D