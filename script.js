const numbers = "0123456789";
const spacialSybmols = "~!@#$%^&*"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

function randomNumber(){
    return numbers[Math.floor(Math.random() * 10)];
    // return Math.floor(Math.random() * 10);
}

function randomSymbol(){
    return spacialSybmols[Math.floor(Math.random() * spacialSybmols.length)];
}

function randomUpperCase(){
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomLowerCase(){
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

// DOM selectors
const passLength = document.getElementById("length");
const upperInput = document.getElementById("upperCase");
const lowerInput = document.getElementById("lowerCase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const finalPassword = document.getElementById("result");
const showRange = document.getElementById("showRange");
showRange.innerText = passLength.value;

//Copy Generated Password
function copyPassword(){
    const textarea = document.createElement("textarea");
    const password = finalPassword.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password Coppied!");
}

//Generate Password
const password = "";
function generatePassword(password) {
    console.log(password);
    if (upperInput.checked) {
        password += randomUpperCase();
    }
    if (lowerInput.checked) {
        password += randomLowerCase();
    }
    if (numbersInput.checked) {
        password += randomNumber();
    }
    if (symbolsInput.checked) {
        password += randomSymbol();
    }
    if (password.length <= Number(passLength.value)) {
        return generatePassword(password);
        
    }
    
    finalPassword.innerText = password.slice(1, Number(passLength.value) + 1);
}
// generatePassword(password);

function showVal(){
    const currentValue = document.getElementById("length").value;
    showRange.innerText = currentValue;
 }

