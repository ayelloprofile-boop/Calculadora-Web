function resgatarValores() {
    let PrimeiroValor = Number(document.getElementById("PrimeiroValor").value);
    let SegundoValor = Number(document.getElementById("SegundoValor").value);

    return { PrimeiroValor, SegundoValor };
}

function somar() {
    let { PrimeiroValor, SegundoValor } = resgatarValores();

    document.getElementById("resultado").textContent =
        PrimeiroValor + SegundoValor;
}

function subtracao() {
    let { PrimeiroValor, SegundoValor } = resgatarValores();

    document.getElementById("resultado").textContent =
        PrimeiroValor - SegundoValor;
}

function multiplicacao() {
    let { PrimeiroValor, SegundoValor } = resgatarValores();

    document.getElementById("resultado").textContent =
        PrimeiroValor * SegundoValor;
}

function divisao() {
    let { PrimeiroValor, SegundoValor } = resgatarValores();

    if (SegundoValor === 0) {
        document.getElementById("resultado").textContent =
            "Não é possível dividir por zero";
        return;
    }

    document.getElementById("resultado").textContent =
        PrimeiroValor / SegundoValor;
}