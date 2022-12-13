let A = parseInt(gets()), B= parseInt(gets()); 
 
// TODO: Calcule a porcentagem de diferença entre os dois valores

let  variacao_percentual = (B - A) / A * 100; 
print(Math.trunc(variacao_percentual) + "%");