let nome = prompt("Qual será é o nome do herói?")
let exp = prompt("Quanto XP o herói tem acumulado até agr?")

if(exp <= 1000) {
    // console.log("O herói é nível ferro")
    document.write("O herói ", nome, " é nível ferro")
}
else if(exp >= 1001 && exp <= 2000){
    console.log("O herói", nome, " é nível bronze")
}
else if(exp >= 2001 && exp <= 5000){
    console.log("O herói", nome, " é nível prata")
}
else if(exp >= 5001 && exp <= 7000){
    console.log("O herói", nome, " é nível ouro")
}
else if(exp >= 7001 && exp <= 8000){
    console.log("O herói", nome, " é nível platina")
}
else if(exp >= 8001 && exp <=9000){
    console.log("O herói", nome, " é ascendente")
}
else if(exp >= 9001 && exp <= 10000){
    console.log("O herói", nome, " é imortal")
}
else{
    console.log("O herói", nome, " é radiante")
}