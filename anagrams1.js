let button = document.getElementById("findButton");

function getAnagramsOf(input) {
    const result = [];
    const key = alphabetize(input);
    for (let word of words) {
        if (alphabetize(word) === key) {
            result.push(word);
        } 
    }
    let div = document.createElement("div");
    div.textContent = result;
    document.body.appendChild(div);
    return result;
}

button.onclick = function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}