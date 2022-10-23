
const totalChar = document.getElementById("totalChar");
const uppercase = document.getElementById("chup");
const lowercase = document.getElementById("chlow");
const number = document.getElementById("chnum");
const symbol = document.getElementById("chsym");
const btn = document.getElementById("btn");
const output = document.getElementById("password");

function copyPass() {
    let copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 30);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

function getRandomInt(min, max) {
    max = max + 1
    return Math.floor(Math.random() * (max - min) + min)
}
function needPass() {
    ch_low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    ch_up = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    sym = ['@', '#', '$', '%', '=', ':', '?', '.', '/', '|', '~', '>', '*', '(', ')', '<']
    var char = document.getElementById("totalChar").value;
    password = ''
    if(lowercase.checked || uppercase.checked || symbol.checked || number.checked){
    while (password.length != char) {
        if (lowercase.checked) {
            for (i = 0; i < getRandomInt(1, 2); i++) {
                x = ch_low[getRandomInt(0, 25)]
                password += x
            }
        }
        if (uppercase.checked) {
            for (i = 0; i < getRandomInt(1, 2); i++) {
                x = ch_up[getRandomInt(0, 25)]
                password += x
            }
        }
        if (symbol.checked) {
            for (i = 0; i < getRandomInt(1, 2); i++) {
                x = sym[getRandomInt(0, 15)]
                password += x
            }
        }
        if (number.checked) {
            for (i = 0; i < getRandomInt(1, 2); i++) {
                x = sym[getRandomInt(0, 9)]
                password += x
            }
        }
        if(password.length > char){
            break
        }
    }}
    else{
        alert("Please Select atleast one")
    }
    password=password.slice(0,char)
    output.value=password
}
