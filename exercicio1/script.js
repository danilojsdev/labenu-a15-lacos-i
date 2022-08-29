let coxinhas = prompt("Você deseja comer mais coxinhas? Digite \"S\" para sim e \"N\" para não.");

let soma = 0;

while(coxinhas == "S" || coxinhas == "s"){
        soma = soma + 2.50 
        coxinhas = prompt("Você deseja comer mais coxinhas? Digite \"S\" para sim e \"N\" para não.")
};

console.log("Você gastou", soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), ".");