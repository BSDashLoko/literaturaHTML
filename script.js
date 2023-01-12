const collection = document.getElementsByClassName("imgBtn");
let inputValue = "nothing"

let mensagem = "Oi Lu, eu escondi isso aqui na tua bolsa no último dia de aula, espero q você ache quando chegar em casa, esse é o \“presente\” que eu disse que ia te dar pra lembrar q eu nunca vou te abandonar, foi mal por n ser algo melhorzinho.\nEu só quero dizer como você é incrível, eu amo tudo em você, o jeito que você se esforça e quer melhorar todo dia (as vezes até demais), o jeito que você se importa com as pessoas, seu humor, sua aparência, literalmente tudo. Você me mostra que eu posso ser uma pessoa melhor, porque todo dia você melhora, e você me faz querer melhorar, eu fico todo bobo vendo você estudar coreano, e se esforçando pra aprender uma língua nova só por gostar, sei lá eu acho muito foda isso, o jeito que você continua estudando log mesmo tendo dificuldade, eu me impressiono e me inspiro nessa determinação. Amo suas piadas bosta, a estranha fixação por bundas, como você quer o bem dos seus amigos, seu abraço, suas mordidas fortes p caralho. E de verdade, eu me inspiro muito em você, nessa vontade que você tem de ser a melhor possível (DE FORMA SAUDÁVEL PFV N QRO TE VER PASSANDO MAL DE NOVO), você me mostrou o quão bom uma amizade poderia ser e como sempre é possível ser melhor.\nAcho que deu p perceber já, mas eu te amo, muito, tipo muito mesmo, você não faz ideia, e eu nunca senti isso por alguém antes, de verdade, eu fico feliz todo dia em saber que tenho você por perto, e não quero que isso mude, nunca.\n\nEusocartaxo."


function clickImgBtn(inputId){

    for(i = 0; i<collection.length; i++){
        collection[i].style.opacity = "1";
        collection[i].style.filter  = 'alpha(opacity=100)';
    }

    var element = document.getElementById(inputId)
    element.style.opacity = "0.5";
    element.style.filter  = 'alpha(opacity=50)';
    inputValue = inputId;
}

function clickCBtn(){
    if(inputValue == "nothing"){
        alert("Por favor selecione a imagem que não foi feita por uma IA!")
    }
    if(inputValue == "btnTrue"){
        alert("Era uma cartinha q eu ia te dar no ultimo dia de aula na casa de sammy")
        document.write(mensagem)
    }else{
        alert("Essa pintura foi feita por uma Inteligência Artficial, tente novamente!")
    }
}