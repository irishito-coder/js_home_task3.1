function getBananas(count) {
    if (count === 1) {
        return "1 banana";
    } else {
        return count + " bananas";
}
}

let userInput = prompt("Введите число бананов:");
userInput = parseInt(userInput);

if (!isNaN(userInput)) {
    alert(getBananas(userInput));
} else {
    alert("Пожалуйста, введите корректное число.");
}
