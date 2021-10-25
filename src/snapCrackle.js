let primeira = "snap";
let segunda = "Crackle";
let terceira = "SnapCrackle"
let maxValue = 12;
let valor = 1;
let saidaArr = [];
function snapCrackle(){
    while(valor <= maxValue){
         if (valor %5 === 0 && valor %2 !==0){
        saidaArr.push(terceira);
}
         else if (valor %5 === 0){
         saidaArr.push(segunda);
}
         else if (valor %5 === 0 || valor %2 !== 1) {
         SaidaArr.push(valor);
}
        else if (valor %2 !== 0 ){
            saidaArr.push(primeira);

}
valor++
}
return saidaArr
}
console.log (snapCrackle().join());