import getWords from "./getWords";

let button = document.querySelector(".btn");
button.addEventListener("click", function () {
    let str = document.querySelector("input").value;
    if(str !== '') {
        for(let word of getWords(str)) {
            console.log(word);
        }
        button.disabled = true;
    }
});

let inp = document.querySelector("input");
inp.addEventListener("input", function () {
    button.disabled = false;
});

