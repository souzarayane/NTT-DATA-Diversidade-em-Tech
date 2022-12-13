
let N = parseInt(gets()); 

//let n = 1 + 8*N; 

//TODO: Retorne a altura máxima que o triângulos de moedas terá


function triangulo(n){
let x = n;
let y = 1;

let e = 0.000001;
while(x - y > e){
    x = (x + y) / 2;
    y = n / x;
}
    return x;
}

function alturaMaxima(N){
    let n = 1 + 8 * N;
    let altMax = (-1 + triangulo(n)) / 2;

    return Math.round(altMax);
}

print(alturaMaxima(N));