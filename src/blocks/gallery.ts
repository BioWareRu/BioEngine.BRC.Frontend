import $ from 'jquery';
import Masonry from 'masonry-layout';
import jQueryBridget from 'jquery-bridget';
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);
jQueryBridget('masonry', Masonry, $);

$(function () {
    const $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    console.log($grid);

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });
});
