var inputQuantidade = document.querySelector("#qtd");
var outputTotal = document.querySelector("#total");

inputQuantidade.oninput = function () {
    var preco = document.querySelector("#preco").textContent;
    var preco = textToFloat(preco);
    
    var quantidade = inputQuantidade.value;
    
    var total = quantidade * preco;
    
    outputTotal.value = floatToText(total);   
}

//transforma texto html em numeros
function textToFloat(text){
    text = text.replace("R$ ", "").replace(",", ".");
    return(parseFloat(text));
}

//transforma os numeros em texto html "R$ + NUMERO "
function floatToText (number) {
    number = "R$ " + number.toFixed(2); // adiciona R$ e para nas 2 casas decimais
    number = number.replace(".", ","); //troca ponto pela virgula(sistema br)
    
    return number;
}