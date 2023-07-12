let result = document.getElementById("screen")

function calculate(number) {
    result.value += number;
}

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0,-1)
}

function total() {
    try{
        result.value=eval(result.value)
    }

    catch{
        alert("expression error")
    }
}