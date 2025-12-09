/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01-udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------
    ----------  /proyecto-jquery/  ------------------------------
    ----------  /src/scripts/  ----------------------------------
    ----------  /scroll.js  -------------------------------------
    -------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('-----  scroll.js  -----');
    console.log('\n');


    //  ----------  scroll  ----------

    //  -----  referencias al HTML  -----
    const $htmlBody = $('html, body');
    const $subir = $('#subir');
    const $selectorTheme = $('#selectorTheme');


    //  -----  evento al hacer scroll  -----
    $(window).on('scroll resize', function () {
        
        const $window = $(this);
        const scrollTop = $window.scrollTop();
        const windowWidth = $window.width();

        if (windowWidth < 1400) {
            
            if (scrollTop === 0)                
                $selectorTheme.slideDown();     //  -----  Estamos arriba del todo  -----
            
            else
                $selectorTheme.slideUp();       //  -----  Hemos hecho scroll hacia abajo  -----
        } 
        
        else 
            $selectorTheme.show();              //  -----  En pantallas grandes siempre se muestra  -----
        
    });


    //  -----  evento al hacer click en el boton subir  -----
    $subir.on('click', function (e) {

        e.preventDefault();

        $htmlBody.animate({
            scrollTop: 0
        }, 1000);

    });



})(jQuery);
