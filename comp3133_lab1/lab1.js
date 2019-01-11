function capital_letter(letters) 
{
    letters = letters.split(" ");

    for (var i = 0, x = letters.length; i < x; i++) {
        letters[i] = letters[i][0].toUpperCase() + letters[i].substr(1);
    }

    return letters.join(" ");
}

console.log(capital_letter("The quick brown fox"));