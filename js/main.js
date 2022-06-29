'use strict'
window.addEventListener('load',()=>{
    //declaracion de variables para cargar las clases xd
    const imagen1 = document.querySelector('.imagen1');
    const contenedor = document.querySelector('.container');
    const catalogo = document.querySelector('.contenedor-revista');
    const headerCatalogo = document.querySelector('header');
    const contenidoRevista = document.querySelector('.revista')

    //para ocultar el contenido de la revista y no se muestre en el inicio uwu
    contenidoRevista.style.display='none';

    //creacion del evento click para cuando se seleccione la imagen 1 oculte su contenido
        imagen1.addEventListener('click',function(){
        contenedor.classList.add('cuerpo-wrapper-revista');
        catalogo.style.display = 'none';
        headerCatalogo.style.display = 'none';
        contenidoRevista.style.display = 'block';
        window.setTimeout(function(){
            contenidoRevista.classList.add('mostrar-revista');
        },10);
         
        });
    //creacion de evento mouse para sombreado y hover de cards :3
    const articulo = document.querySelector('.articulo');
    const articulo_usable = articulo.style;
        articulo.addEventListener('mouseover',function(){
            //prueba
            articulo.classList.add('estilos-card');
           articulo_usable.boxShadow = '0px 0px 10px 10px rgba(0, 0, 0, 0.3) inset';
           articulo_usable.textShadow = 'inset 30px 0px 30px rgba(0, 0, 0, 1)';
           articulo_usable.transform = 'scale(0.9)';
           articulo_usable.cursor = 'pointer';
           articulo_usable.border = '1px solid white';
           articulo_usable.transition = '0.4s ease-out all';

        });
        articulo.addEventListener('mouseout', function () {
           articulo_usable.boxShadow = 'none';
           articulo_usable.textShadow = 'none';
            articulo_usable.transform = 'scale(1)';
            articulo_usable.border = 'none';

          });
       
          //aqui estan las funciones deeeeeeee el contenido del triangulo dddd
          window.addEventListener('scroll',function(){
            let user_collapse = document.querySelector('.encabezado-triangulo');
            user_collapse.classList.toggle('headerFixed', window.scrollY>0);
        
        })
        window.addEventListener('scroll',function(){
            let footer_collapse = document.querySelector('.redes');
            footer_collapse.classList.toggle('footerFixed',window.scrollY<1176);
            if(window.scrollY < 50){
                footer_collapse.style.display = 'none';
        
                
            }else{
                footer_collapse.style.display = 'block';
        
            }
        
        })
        //SCROLL
                // para saber la dimension de la pantalla
                
                window.addEventListener('scroll',()=>{
                    const scrolled = window.scrollY;
                    console.log(scrolled);
                })

    //aqui van las funciones de mostrar el contenido del triangulo al dar clic a un card uwu
 
    articulo.addEventListener('click',function(){
            let contenido_cards = document.querySelector('.contenido-card');
            let search_heart = document.querySelector('.revista-cabecera i');
            let articuloTriangulo = document.querySelector('.contenido-triangulo');
            let triangulo = document.querySelector('.arrow-right');
            let back = document.querySelector('.boton button');
            let moverIzquierda = document.querySelector('.palaizquierda');
            articuloTriangulo.style.display = 'block';
            moverIzquierda.classList.toggle('moverizquierda');
            contenido_cards.style.display = 'none';
            search_heart.style.display = 'none';
            back.style.display = 'block';
            triangulo.style.display = 'block';

                //metodo al hacer clic en regresar BACK
        back.addEventListener('click',function(){
            // articuloTriangulo.style.display = 'none';
            contenido_cards.style.display = 'block';
            search_heart.style.display = 'block';
            back.style.display = 'none';
            triangulo.style.display = 'none';
            articuloTriangulo.style.display = 'none';
            moverIzquierda.classList.remove('moverizquierda');
            })

    
    });
    
});