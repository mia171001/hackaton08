function sum() {
    const number1 = Number(document.getElementById("ex1-number1").value);
    const number2 = Number(document.getElementById("ex1-number2").value);
    const result = number1 + number2;
    document.getElementById("ex1-result").innerHTML = result
}

function average() {
    const note1 = +(document.getElementById("ex2-note1").value);
    const note2 = +(document.getElementById("ex2-note2").value);
    const note3 = +(document.getElementById("ex2-note3").value);
    const note4 = +(document.getElementById("ex2-note4").value);
    const avr = (note1 + note2 + note3 + note4) / 4;
    document.getElementById("ex2-result").innerHTML = avr
}

function area() {
    const base = +(document.getElementById("ex3-base").value);
    const height = +(document.getElementById("ex3-height").value);
    const areaRectangle = base * height;
    document.getElementById("ex3-area").innerHTML = areaRectangle
}

function areaT() {
    const base = +(document.getElementById("ex4-base").value);
    const height = +(document.getElementById("ex4-height").value);
    const areaTriangle = (base * height) / 2;
    document.getElementById("ex4-area").innerHTML = areaTriangle
}

function areaC() {
    const radio = +(document.getElementById("ex5-radio").value);
    const pi = Math.PI;
    const areaCircumference = pi * radio * radio;
    document.getElementById("ex5-area").innerHTML = areaCircumference
}

function salaryT() {
    const salary = +(document.getElementById("ex6-salary").value);
    const hoursT = +(document.getElementById("ex6-hoursT").value);
    const salaryTotal = salary * hoursT;
    document.getElementById("ex6-salaryTotal").innerHTML = salaryTotal

}

function inches() {
    const meter = +(document.getElementById("ex7-meter").value);
    const inchesT = meter / 0.0254;
    document.getElementById("ex7-inches").innerHTML = " Los metros ingresados equivalen a : " + inchesT + " pulgadas"
}

function dolar() {
    const sol = +(document.getElementById("ex8-sol").value);
    const dolarT = sol / 3.69;
    document.getElementById("ex8-dolar").innerHTML = dolarT.toFixed(2) + " dolares"
}

function age() {
    const date = +(document.getElementById("ex9-date").value);
    const ageT = 2024 - date;
    document.getElementById("ex9-age").innerHTML = ageT + " años"
}

function bond() {
    const bondA = +(document.getElementById("ex10-bond").value);
    let bondT;
    if (bondA >= 1 && bondA <= 5) {
        bondT = bondA * 100;
        document.getElementById("ex10-bondTotal").innerText = "Al empleado le corresponde $" + bondT;
    } else {
        if (bondA > 5) {
            bondT = 1000;
            document.getElementById("ex10-bondTotal").innerText = "Al empleado le corresponde $" + bondT;
        }
    }
}
function teacher() {
    const salarioInicial = 1500;
    const incrementoAnual = 0.10;
    let salarioTotal = 0;
    for (let i = 1; i <= 6; i++) {
        let salarioAnual = salarioInicial;
        for (let j = 1; j <= i; j++) {
            salarioAnual += salarioAnual * incrementoAnual;
        }
        salarioTotal += salarioAnual;
        document.getElementById("ex11-teacher").innerHTML += "Año " + i + ": $" + salarioAnual.toFixed(2) + "<br>";

    }
    document.getElementById("ex11-teacher").innerHTML += "Salario Total despues de 6 años " + ": $" + salarioTotal.toFixed(2);
}

function vote() {
    const age = +(document.getElementById("ex12-age").value);
    const ageA = age + 2;
    if (age < 0) {
        document.getElementById("ex12-vote").innerText = "Edad invalida";
    }
    if (ageA >= 18) {
        document.getElementById("ex12-vote").innerText = "Puede votar en las próximas elecciones.";
    } else {
        document.getElementById("ex12-vote").innerText = "No puede votar en las próximas elecciones.";
    }
}