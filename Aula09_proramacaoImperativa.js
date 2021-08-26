/**
 * 1 ͦ Checkpoint de Programação Imperativa!
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou 
diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x 
o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato 
inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve 
exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato 
pronto, bom apetite!!!".
 * 
 */

var alimento = ""; //esolha do tipo de alimento pelo usuario
var adicional = 0; //escolha opcional de tempo pelo usuario

function microondas(alimento, adicional) {
    switch (alimento) {
        case 'pipoca':
            time = 10;
            break;
        case 'macarrao':
            time = 8;
            break;
        case 'carne':
            time = 15;
            break;
        case 'feijao':
            time = 12;
            break;
        case 'brigadeiro':
            time = 8;
            break;
        default:
            time = - adicional;
            console.log("Prato inexistente!");
            break;
    }

    if (time > 0) {
        adicional = time + adicional;

        if (adicional < time) {
            return console.log("Tempo insuficiente!");
            //console.log("Para o alimento, " + escolha + ", o tempo é de " + adcional + " segundos!");
        } else if ((adicional > (time * 2)) && (adicional <= (time * 3))) {
            console.log("A comida queimou!");
            //console.log("Para o alimento, " + escolha + ", o tempo é de " + adcional + " segundos!");
        } else if (adicional > time * 3) {
            return console.log("kabumm");
        } else {
            return console.log("Prato pronto, bom apetite!!!");
        }
    }
}

microondas("brigadeiro", 8);