

$(document).ready
(
   function() //Por alguna razón que no me interesa, la función no lleva punto y coma al final.
   {
        console.log( "Esto está funcionando." );
        
        $(window).scroll
        (
            function()
            {
                //console.log( "Este scroll está funcionando." + $(window).scrollTop() );
                console.log( "Este scroll está funcionando." );   
                $("#contenedor-info").html( "ScrollTop: " +  $(window).scrollTop() + " " + $(window).height() );
            }
        );       
        
   } //Si hay más funciones abajo, esta debe ir con punto y coma.
    
); // Ojo, final de jquery, lleva punto y coma.