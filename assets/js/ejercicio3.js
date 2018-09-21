
n = parseInt(prompt("Ingrese un numero :"));

function fibonacci(num) {
    if (num == 0) {
        return 0
    }
    else if (num == 1) {
        return 1    }
    return fibonacci(i - 1) + (fibonacci(i - 2));
}
for (var i = 0; i < n; i++) {
    console.log(fibonacci(i), "\n");
}

