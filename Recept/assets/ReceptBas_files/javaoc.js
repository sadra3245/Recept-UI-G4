import { createApp, ref } from "vue";

const app = {
    setup() {
        
    }
}

const slider = document.getElementById('slider');


noUiSlider.create(slider, {
    start: 0,
    connect: 'lower', 
    range: {
        'min': 0,
        'max': 100
    }
});