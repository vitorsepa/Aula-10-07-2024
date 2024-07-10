let peso=189, altura=2.0, imc=peso/(altura*altura)

if (imc < 18.5){
    console.log("Abaixo do peso.")
} else if (imc >= 18.6 && imc <= 24.9) {
    console.log("Peso ideal(Parabéns!).")
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Levemente acima do peso.")
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade grau 1.")
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade grau 2(Severa).")
} else if (imc > 40) {
    console.log("Obesidade grau 3(Mórbida).")
}




