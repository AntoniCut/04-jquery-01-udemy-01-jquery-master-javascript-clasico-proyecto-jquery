/*
    -------------------------------------------------------------
    ----------  /jquery.antonydev.tech/  ------------------------
    ----------  /01-udemy/  -------------------------------------
    ----------  /01-jquery-master-javascript-clasico/  ----------
    ----------  /proyecto-jquery/  ------------------------------
    ----------  /src/routes/  -----------------------------------
    ----------  /routes-pages.js  -------------------------------
    -------------------------------------------------------------
*/


/**
 * @typedef {import('../types/route-types.js').Route} Route
 */


/**
 *  - `Array de objetos de tipo Route` que definen las `rutas de la aplicación SPA`
 *  @type {Route[]}
 */



//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
export const routesProyectoJQuery = [


    {
        id: 'pageInicio',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/assets/favicon/jquery-favicon-original.ico',
        pageTitle: 'Inicio - Proyecto SPA con HTML 5, CSS 3, JavaScript y jQuery',
        path: '/',
        components: {
            "#selectorTheme": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/selector-theme.html',
            "#layoutHeader": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-header.html',
            "#layoutNavbar": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-navbar.html',
            "#slider": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-slider.html',
            "#layoutMain": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/pages/inicio.html',
            "#layoutAside": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-aside.html',
            "#layoutFooter": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-footer.html',
        },
        headerTitle: 'Inicio',
        styles: [
            { href: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/styles/components/layout/layout-slider.css' },
            { href: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/styles/pages/posts.css' }
        ],
        scripts: [
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/selector-theme.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/plugins/bxslider-4-4.2.17/js/jquery.bxslider.min.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/slider.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/scroll.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/posts.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/login.js' }
        ]
    },

    {
        id: 'pageAbout',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/assets/favicon/jquery-favicon-original.ico',
        pageTitle: 'About - Proyecto SPA con HTML 5, CSS 3, JavaScript y jQuery',
        path: '/about',
        components: {
            "#selectorTheme": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/selector-theme.html',
            "#layoutHeader": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-header.html',
            "#layoutNavbar": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-navbar.html',
            "#slider": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-slider.html',
            "#layoutMain": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/pages/about.html',
            "#layoutAside": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-aside.html',
            "#layoutFooter": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-footer.html',
        },
        headerTitle: 'About',
        styles: [
            { href: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/styles/components/layout/layout-slider.css' },
            { href: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/styles/pages/about.css' }
        ],
        scripts: [
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/selector-theme.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/plugins/bxslider-4-4.2.17/js/jquery.bxslider.min.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/slider.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/scroll.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/about.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/login.js' }
        ]
    },

    {
        id: 'pageContacto',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/assets/favicon/jquery-favicon-original.ico',
        pageTitle: 'Contacto - Proyecto SPA con HTML 5, CSS 3, JavaScript y jQuery',
        path: '/contacto',
        components: {
            "#selectorTheme": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/selector-theme.html',
            "#layoutHeader": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-header.html',
            "#layoutNavbar": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-navbar.html',
            "#slider": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-slider.html',
            "#layoutMain": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/pages/contacto.html',
            "#layoutAside": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-aside.html',
            "#layoutFooter": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-footer.html',
        },
        headerTitle: 'Contacto',
        styles: [
            { href: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/styles/components/layout/layout-slider.css' },
            { href: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/styles/pages/contacto.css' }
        ],
        scripts: [
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/selector-theme.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/plugins/bxslider-4-4.2.17/js/jquery.bxslider.min.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/plugins/jquery.form-validator-2.3.79/jquery.form-validator.min.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/slider.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/scroll.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/contacto.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/login.js' }
        ]
    },

    {
        id: 'pageReloj',
        favicon: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/assets/favicon/jquery-favicon-original.ico',
        pageTitle: 'Reloj - Proyecto SPA con HTML 5, CSS 3, JavaScript y jQuery',
        path: '/reloj',
        components: {
            "#selectorTheme": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/selector-theme.html',
            "#layoutHeader": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-header.html',
            "#layoutNavbar": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-navbar.html',
            "#slider": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-slider.html',
            "#layoutMain": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/pages/reloj.html',
            "#layoutAside": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-aside.html',
            "#layoutFooter": '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/components/layout/layout-footer.html',
        },
        headerTitle: 'Reloj',
        styles: [
            { href: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/styles/components/layout/layout-slider.css' },
            { href: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/styles/pages/reloj.css' }
        ],
        scripts: [
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/selector-theme.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/plugins/bxslider-4-4.2.17/js/jquery.bxslider.min.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/slider.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/scroll.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/reloj.js' },
            { src: '/01-udemy/01-jquery-master-javascript-clasico/proyecto-jquery/src/scripts/login.js' }
        ]
    },
      

];
