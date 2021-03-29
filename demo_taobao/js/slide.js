var autoplay = true;
var autoplay_Delay = 2000; // ms
var autoplayId;
var intervalId;

var slider;
var slider_item_container;
var slider_items;
var indicator_container;

var slider_item_width;
var curIndex = 0;

window.onload = function() {
    initElement();
    initEvent();
    if (autoplay) {
        startAnimation(slider_item_container);
    }
}