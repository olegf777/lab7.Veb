$(document).ready(function() {
    // Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000, // 2 секунди
        autoplayHoverPause: true
    });

    // Ініціалізація Unite Gallery
    $("#gallery").unitegallery({
        gallery_theme: "tiles",
        tile_enable_textpanel: true,
        tile_textpanel_title_font_size: 16,
        tile_textpanel_padding: 10
    });

    // Ініціалізація Accordion, щоб всі розділи були закриті, включаючи перший
    $("#accordion").accordion({
        active: false,  // Це закриває всі секції при завантаженні, включаючи перший
        collapsible: true  // Це дозволяє закривати розділи при натисканні
    });

    // Ініціалізація Datepicker
    $("#datepicker").datepicker();

    // Ініціалізація Tabs
    $("#tabs").tabs();
});
