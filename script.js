const collection = document.getElementsByClassName("imgBtn");
let inputValue = "nothing"


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
        alert("Parabéns, você acertou! Essa é a única obra de arte não produzida por uma Inteligência Artificial")
    }else{
        alert("Essa pintura foi feita por uma Inteligência Artficial, tente novamente!")
    }
}