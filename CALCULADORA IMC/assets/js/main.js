let botao = document.querySelector('.botao').addEventListener('click', function(event){
    event.preventDefault()
});
function calcularIMC(){
    let imagem = document.querySelector('.imagem');
    let peso = document.querySelector('.peso').value;
    let altura = document.querySelector('.altura').value;

    let valorIMC = peso / (altura * altura).toFixed(2);
    let classificacao;

    if(valorIMC < 18.5){
        classificacao = 'Peso abaixo do normal';
    }else if(valorIMC >= 18.5 && valorIMC <=24.9){
        classificacao= 'Peso normal';
    }else if(valorIMC >= 25.0 && valorIMC <= 29.9){
        classificacao = 'Excesso de peso';
       
    }else if(valorIMC >= 30.0 && valorIMC <= 34.9){
        classificacao = 'Obesidade classe I';
    }else if(valorIMC >= 35.0 && valorIMC <= 39.9){
        classificacao = 'Obesidade classe II';
    }else{
        classificacao = 'Obesidade classe III';
    }

    if(Number.isNaN(valorIMC) || !Number.isFinite(valorIMC) || valorIMC == 0){
        document.querySelector('.resultado').innerText = "VALOR INDEFINIDO";
    }else{
        document.querySelector('.resultado').innerText = valorIMC.toFixed(2) + ": " + classificacao ;
    }
}
