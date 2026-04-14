
var slider = document.getElementById('slider');


noUiSlider.create(slider, {
    start: 0,
    connect: 'lower', 
    range: {
        'min': 0,
        'max': 100
    }
});