const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";
generateEl.addEventListener("click", () => {
    let arrayResult = [];
    const canGenerate = upperEl.checked || numberEl.checked || symbolEl.checked || lowerEl.checked
    if (!canGenerate) return alert("select at least one input field")

    if (upperEl.checked) {
        createSpecipicPassword(arrayResult, upperLetters.length, upperLetters);
    }
    if (numberEl.checked) {
        for (let i = 0; i < lenEl.value; i++) {
            arrayResult.push(Math.ceil(Math.random() * 10) - 1);
        }
    }
    if (symbolEl.checked) {
        createSpecipicPassword(arrayResult, numbers.length, symbols);
    }
    if (lowerEl.checked) {
        createSpecipicPassword(arrayResult, lowerLetters.length, lowerLetters);
    }

    const mixedArray = shuffle(arrayResult);
    mixedArray.length = lenEl.value > 15 ? 15 : lenEl.value
    pwEl.textContent = mixedArray.join("");
});

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

function createSpecipicPassword(arrayResult, num, str) {
    for (let i = 0; i < lenEl.value; i++) {
        arrayResult.push(str[Math.ceil(Math.random() * num) - 1]);
    }
}
