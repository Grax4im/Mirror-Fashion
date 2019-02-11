$('.novidades button').click(function(){
    $('.novidades').toggleClass('painel-aberto');
    var botao = document.querySelector('.novidades button');
    
    //muda texto do botão
    if(botao.textContent === "Mostrar Mais") {
    botao.textContent = "Mostrar Menos";
    }
    else{
    botao.textContent = "Mostrar Mais";    
    }
});

$('.mais-vendidos button').click(function(){
    $('.mais-vendidos').toggleClass('painel-aberto');
    var botao = document.querySelector('.mais-vendidos button');
   
    //muda texto do botão
    if(botao.textContent === "Mostrar Mais") {
    botao.textContent = "Mostrar Menos";
    }
    else{
    botao.textContent = "Mostrar Mais";    
    }
});

