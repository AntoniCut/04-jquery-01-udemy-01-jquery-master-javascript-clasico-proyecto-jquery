/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01-udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------
    ----------  /proyecto-jquery/  ------------------------------
    ----------  /src/scripts/  ----------------------------------
    ----------  /slider.js  -------------------------------------
    -------------------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('-----  slider.js  -----');
    console.log('\n');


    //  -----  Retardo para asegurar que el DOM esté completamente cargado  -----
    setTimeout(() => {


        const $galeria = $('.galeria');

        console.warn('Inicializando bxSlider...');

        //  -----  Comprobar si el elemento .galeria existe en el DOM  -----
        if (!$galeria.length) {
            console.warn('.galeria No encontrada en el DOM.');
            return
        }

        //  -----  Comprobar si el plugin bxSlider está disponible  -----
        if (!$.fn.bxSlider) {
            console.warn('bxSlider No está disponible.');
            return;
        }

        //  -----  Iniciar el plugin bxSlider  -----
        console.warn('bxSlider iniciado correctamente...');

        //  ----------  plugins bxSlider  ----------
        $('.galeria').bxSlider({
            // mode: 'horizontal',
            mode: 'fade',
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            speed: 500,
            pause: 3000,
            captions: true,
            slideWidth: 1230,
            responsive: true,
            pager: true
        });


    }, 10);


})(jQuery);
