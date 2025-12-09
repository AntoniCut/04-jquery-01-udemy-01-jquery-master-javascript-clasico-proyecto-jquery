/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01-udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------
    ----------  /proyecto-jquery/  ------------------------------
    ----------  /src/scripts/  ----------------------------------
    ----------  /selector-theme.js  -----------------------------
    -------------------------------------------------------------
*/



(function ($) {

    const $toGreen = $('#toGreen');
    const $toRed = $('#toRed');
    const $toBlue = $('#toBlue');

    // Aplicar tema guardado
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) 
        document.body.classList.add(savedTheme);

    else {
        // Tema por defecto si no existe nada en localStorage
        const defaultTheme = "theme-green";
        document.body.classList.add(defaultTheme);
        localStorage.setItem('theme', defaultTheme);
    }

    // Reset class helper
    function setTheme(themeName) {
        document.body.classList.remove("theme-green", "theme-red", "theme-blue");
        document.body.classList.add(themeName);
        localStorage.setItem('theme', themeName);
    }

    $toGreen.on("click", () => setTheme("theme-green"));
    $toRed.on("click", () => setTheme("theme-red"));
    $toBlue.on("click", () => setTheme("theme-blue"));

})(jQuery);
