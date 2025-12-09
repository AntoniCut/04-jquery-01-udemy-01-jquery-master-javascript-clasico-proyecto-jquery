/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01-udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------
    ----------  /proyecto-jquery/  ------------------------------
    ----------  /src/scripts/  ----------------------------------
    ----------  /about.js  --------------------------------------
    -------------------------------------------------------------
*/



(function ($) {

    console.log('\n');
    console.warn('-----  about.js -----');
    console.log('\n');


    //  -----  referencias al HTML  -----
    const $acordeon = $('#acordeon');
    

    //  -----  acordeon  -----
    $acordeon.accordion({
        collapsible: true,
        heightStyle: "content"
    });
    

})(jQuery);
