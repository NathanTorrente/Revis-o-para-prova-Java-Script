/*function MostrarTexto(){
    var textoCpf = document.getElementById('cpf').value; // questao da 4 prova
    var texto = document.querySelector('.form-control').value; // classe
    var texto = document.querySelector('#cpf').value; //id
    var texto = document.querySelector('button').value; // elemento
   
    alert(textoCpf);

}
document.addEventListener('click', MostrarTexto()); // em qualquer local da tela a mensagem sera apresentada */

const btn = document.querySelector('button');
btn.style.background = 'red';   

btn.addEventListener('click', function(){
    cpf = document.getElementById('cpf').value;
    alert(cpf)
});



//window.addEventListener('loader', function())
//window.addEventListener('loader', function(){ // carrega as imagens depois
 //   mascaraCPF();
//});


document.addEventListener('DOMContentLoaded', function(){ //carrega as imagens antes
mascaraCPF();
mascaraTel();
})

    

function mascaraCPF(){

    var Cpfmascara = IMask(
        document.getElementById('cpf'),{
            mask: '000.000.000-00',
    })

    
}
function mascaraTel(){
    var telMascara = IMask(
        document.getElementById('tel'),{
            mask: '(00) 00000-0000',
    });

    const btn = document.querySelector('button');
    btn.style.background = 'red';  
}






