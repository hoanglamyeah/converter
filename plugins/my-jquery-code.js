

if (process.browser) {
    const Masonry = require('masonry-layout')
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });
}
