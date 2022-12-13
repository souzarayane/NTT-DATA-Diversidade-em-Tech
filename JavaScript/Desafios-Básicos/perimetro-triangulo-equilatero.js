
let pi = 3.14159265358979323846;
 
let a = gets();

//TODO: Retorne a área do perímetro do triângulo
function areaCircun(a){
    return (a * a * (pi / 3));
}

area = areaCircun(a);

console.log('A area da circunferencia eh: ' + area.toFixed(2));