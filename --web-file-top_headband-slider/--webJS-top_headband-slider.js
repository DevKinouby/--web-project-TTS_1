/* -- Arrows -- */

const ths_leftArrow = document.querySelector('.top_headband-slider-arrow-left')
const ths_rightArrow = document.querySelector('.top_headband-slider-arrow-right')

/* -- Widgets -- */

const ths_widget_1 = document.querySelector('.top_headband-slider-widget-1')
const ths_widget_2 = document.querySelector('.top_headband-slider-widget-2')
const ths_widget_3 = document.querySelector('.top_headband-slider-widget-3')
const ths_widget_4 = document.querySelector('.top_headband-slider-widget-4')

/* -- Circles -- */

const ths_widget_1_circle = document.querySelector('.top_headband-slider-widget-1_top-cirle')
const ths_widget_2_circle = document.querySelector('.top_headband-slider-widget-2_top-cirle')
const ths_widget_3_circle = document.querySelector('.top_headband-slider-widget-3_top-cirle')
const ths_widget_4_circle = document.querySelector('.top_headband-slider-widget-4_top-cirle')

var sliderCount = 1;

var ths_time = 4000;

ths_widget_1.classList.add('top_headband-slider-widget-visible')
ths_widget_1_circle.classList.add('top_headband-slider-widget_circle-load')

var clockTic = setInterval(ticker, ths_time)

function ths_widget_checker(){

    if(sliderCount==1){
        ths_widget_1.classList.add('top_headband-slider-widget-visible')
    } else{
        ths_widget_1.classList.remove('top_headband-slider-widget-visible')
    }

    if(sliderCount==2){
        ths_widget_2.classList.add('top_headband-slider-widget-visible')
    } else{
        ths_widget_2.classList.remove('top_headband-slider-widget-visible')
    }

    if(sliderCount==3){
        ths_widget_3.classList.add('top_headband-slider-widget-visible')
    } else{
        ths_widget_3.classList.remove('top_headband-slider-widget-visible')
    }

    if(sliderCount==4){
        ths_widget_4.classList.add('top_headband-slider-widget-visible')
    } else{
        ths_widget_4.classList.remove('top_headband-slider-widget-visible')
    }

}

function ths_widget_circle_checker(){
    if(sliderCount==1){
        ths_widget_1_circle.classList.add('top_headband-slider-widget_circle-load')
    } else{
        ths_widget_1_circle.classList.remove('top_headband-slider-widget_circle-load')
    }

    if(sliderCount==2){
        ths_widget_2_circle.classList.add('top_headband-slider-widget_circle-load')
    } else{
        ths_widget_2_circle.classList.remove('top_headband-slider-widget_circle-load')
    }

    if(sliderCount==3){
        ths_widget_3_circle.classList.add('top_headband-slider-widget_circle-load')
    } else{
        ths_widget_3_circle.classList.remove('top_headband-slider-widget_circle-load')
    }

    if(sliderCount==4){
        ths_widget_4_circle.classList.add('top_headband-slider-widget_circle-load')
    } else{
        ths_widget_4_circle.classList.remove('top_headband-slider-widget_circle-load')
    }
}

function ticker(){
    sliderCount = sliderCount+1

    if (sliderCount>=5){
        sliderCount = 1
    } else if (sliderCount<=0){
        sliderCount = 4 
    }

    ths_widget_checker()

    ths_widget_circle_checker()

    console.log(sliderCount)
}

ths_rightArrow.addEventListener('click', function(){
    clearInterval(clockTic);

    sliderCount = sliderCount+1

    if (sliderCount>=5){
        sliderCount = 1
    } else if (sliderCount<=0){
        sliderCount = 4 
    }

    ths_widget_checker()

    ths_widget_circle_checker()

    console.log(sliderCount)

    clockTic = setInterval(ticker, ths_time);
})

ths_leftArrow.addEventListener('click', function(){
    clearInterval(clockTic);

    sliderCount = sliderCount-1

    if (sliderCount>=5){
        sliderCount = 1
    } else if (sliderCount<=0){
        sliderCount = 4 
    }

    ths_widget_checker()

    ths_widget_circle_checker()

    console.log(sliderCount)

    clockTic = setInterval(ticker, ths_time);
})