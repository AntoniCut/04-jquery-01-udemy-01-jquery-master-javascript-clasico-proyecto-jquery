/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01-udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------
    ----------  /proyecto-jquery/  ------------------------------
    ----------  /src/scripts/  ----------------------------------
    ----------  /contacto.js  -----------------------------------
    -------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('-----  contacto.js  -----');
    console.log('\n');


    //  ----------  Form Validate  ----------

    console.log('Carga de jquery.form-validator.min.js', typeof $.validate); // debe ser 'function'

    const $date = $('form input[name="date"]');

    $date.datepicker({
        dateFormat: 'dd-mm-yy'
    });

    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });


})(jQuery);
