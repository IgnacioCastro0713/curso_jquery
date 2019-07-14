//Curso básico de JQuery con ejemplos de como se haría con javascript puro(Vanilla JS).
//Nota 1: cada sección esta separada por " /* Un Título */ ", no descomentar el título
//Nota 2: para ver como funciona cada sentencia vaya descomentando cada sección de arriba hacia abajo.
//Nota 3: recargar el documento en cada linéa descomentada o comentada.
//@Autor: José Ignacio Menchaca Castro.

$(document).ready(function () {

    /*Puedes mirarlo a través de la consola del navegador */
    console.log('Jquery está funcionando');



    //----------------------------------------------------------------------------------------------------------------------------//


    /* A través de id */
    // $('#idh1').html('Por id con jquery');
    // document.getElementById('idh1').innerHTML = 'por id con vanilla js';

    
    
    
    
    //----------------------------------------------------------------------------------------------------------------------------//

    
    
    /*A través de class*/
    // $('.text-center').html('Por class con jquery');
    // document.getElementsByClassName('text-center')[0].innerHTML = 'por class con vanilla js';

    // Nota: Si existiecen mas etiquetas usando la clase "text-center" traería todos esos elementos en forma de arreglo de más
    // posiciones en este caso solo exite una por eso indique la posición [0]. Esto en vanilla js

    
        
    //----------------------------------------------------------------------------------------------------------------------------//

    
    
    /*A través etiqueta */
    // $('h1').html('Por etiqueta con jquery');
    // document.querySelector('h1').innerHTML = 'por etiqueta por vanilla js';

   
   
    
    //----------------------------------------------------------------------------------------------------------------------------//

   
   
    /* Agregar class. Nota. Son clases de Bootstrap */
    // $('#idh1').addClass('text-danger');
    // document.getElementById('idh1').classList.add('text-danger');

    
    
    
    //----------------------------------------------------------------------------------------------------------------------------//

   
   
   
   /* remover class */
    // $('#idh1').removeClass('p-4');//Nota: p-4 Es un padding al texto sea observador.
    // document.getElementById('idh1').classList.remove('p-4');


    //----------------------------------------------------------------------------------------------------------------------------//



    /* Agregar elementos */
    // $('#contenido').append('<h2 class="text-center">Este es otro elemento con jquery (first)</h2>');
    // //Esto es con vanilla JS
    // let newElement = document.createElement('h2')
    // let text = document.createTextNode('Este es otro elemento con vanilla JS (last)');
    // newElement.appendChild(text);
    // newElement.classList.add('text-center');
    // document.getElementById('contenido').appendChild(newElement);


    //----------------------------------------------------------------------------------------------------------------------------//




    /* Agregar css */
    // $('h2:first').css('color', 'blue');//Nota: ":first" toma el primer h2 del documento tambien existe ":last". de igual manera puedes seguir buscando por id o class
    // document.querySelector('h2:last-child').style.color = 'green'



    //----------------------------------------------------------------------------------------------------------------------------//




    /* Remover elementos */
    // $('h2:last').remove();
    // document.querySelector('h2').remove();
    // $('h2:last').hide();// Nota: solo lo pone en display:none.


    //----------------------------------------------------------------------------------------------------------------------------//





    /* Atributos */
    // $('img').attr('src', 'http://ilya.online/wp-content/uploads/2017/09/jquery1.png');
    // document.querySelector('img').setAttribute('src', 'http://ilya.online/wp-content/uploads/2017/09/jquery1.png');




    //----------------------------------------------------------------------------------------------------------------------------//




    //NOTA: En esta sección descomentar la primera parte comentada del archivo index.html para trabajar con los botones
    //NOTA: para cada botón se hace con jquery y con Vanilla JS (Mucha atención!).



    // $('.btn-primary').click(function() {
    //     $('#idh1').addClass('display-4');
    // });

    // document.querySelector('.btn-primary').addEventListener('click', ()=> { //Esto tambien puede ser con función anónima.
    //     document.getElementById('idh1').classList.add('display-4');
    // });


    // $('.btn-danger').click(function() {
    //     $('#idh1').removeClass('display-4');
    // });


    // document.querySelector('.btn-danger').addEventListener('click', ()=> { //Esto tambien puede ser con función anónima.
    //     document.getElementById('idh1').classList.remove('display-4');
    // });



    
    
    //----------------------------------------------------------------------------------------------------------------------------//
    
    
    


    //NOTA: En esta sección descomentar la segunda parte comentada del archivo index.html para trabajar con los botones
    //NOTA: Se hará el ejemplo usando Jquery y Vanilla js



    // $('#describe').keyup(function () { 
    //     let texto = $('#describe').val(); // Así se toma el valor de un input ya sea text o textarea en jquery
    //     $('#idh1').html(texto);
    // });



    // document.getElementById('describe').addEventListener('keyup', ()=> {
    //     let texto = document.getElementById('describe').value;
    //     document.getElementById('idh1').innerHTML = texto;
    // });


});

