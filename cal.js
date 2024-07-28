
let btn = document.querySelectorAll(".button");
for (let i of btn) {
    i.onclick = function () {
        console.log(i.innerText)
        if (i.innerText == "=") {
            // console.log("I am equal")
            let val = document.querySelector("input").value;
            console.log(eval(val))
            document.querySelector("input").value = eval(val);
        }
        else if(i.innerText == "AC"){
            document.querySelector("input").value = '';
        }
        else if(i.innerText == "x"){

            document.querySelector("input").value = document.querySelector("input").value.slice(0,-1)
        }
        else {
            document.querySelector("input").value += i.innerText;
        }
    }
}