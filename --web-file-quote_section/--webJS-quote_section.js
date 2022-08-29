/* -- Arrows -- */

const qsb_leftArrow = document.querySelector('.quote_section-arrow-left')
const qsb_rightArrow = document.querySelector('.quote_section-arrow-right')

/* -- Comments -- */

const qsb_comment_1 = document.querySelector('.quote_section-comment_1')
const qsb_comment_2 = document.querySelector('.quote_section-comment_2')
const qsb_comment_3 = document.querySelector('.quote_section-comment_3')
const qsb_comment_4 = document.querySelector('.quote_section-comment_4')

/* -- Circles -- */

const qsb_comment_1_circle = document.querySelector('.quote_section-comment-1_top-cirle')
const qsb_comment_2_circle = document.querySelector('.quote_section-comment-2_top-cirle')
const qsb_comment_3_circle = document.querySelector('.quote_section-comment-3_top-cirle')
const qsb_comment_4_circle = document.querySelector('.quote_section-comment-4_top-cirle')

qsb_comment_2.classList.add('quote_section-comment-visible')
qsb_comment_2_circle.classList.add('quote_section-comment_circle-visible')

var sliderCommentCount = 2;

function qsb_comment_checker(){
    
    if(sliderCommentCount==1){
        qsb_comment_1.classList.add('quote_section-comment-visible')
    } else{
        qsb_comment_1.classList.remove('quote_section-comment-visible')
    }

    if(sliderCommentCount==2){
        qsb_comment_2.classList.add('quote_section-comment-visible')
    } else{
        qsb_comment_2.classList.remove('quote_section-comment-visible')
    }

    if(sliderCommentCount==3){
        qsb_comment_3.classList.add('quote_section-comment-visible')
    } else{
        qsb_comment_3.classList.remove('quote_section-comment-visible')
    }

    if(sliderCommentCount==4){
        qsb_comment_4.classList.add('quote_section-comment-visible')
    } else{
        qsb_comment_4.classList.remove('quote_section-comment-visible')
    }

}

function qsb_comment_circle_checker(){

    if(sliderCommentCount==1){
        qsb_comment_1_circle.classList.add('quote_section-comment_circle-visible')
    } else{
        qsb_comment_1_circle.classList.remove('quote_section-comment_circle-visible')
    }

    if(sliderCommentCount==2){
        qsb_comment_2_circle.classList.add('quote_section-comment_circle-visible')
    } else{
        qsb_comment_2_circle.classList.remove('quote_section-comment_circle-visible')
    }

    if(sliderCommentCount==3){
        qsb_comment_3_circle.classList.add('quote_section-comment_circle-visible')
    } else{
        qsb_comment_3_circle.classList.remove('quote_section-comment_circle-visible')
    }

    if(sliderCommentCount==4){
        qsb_comment_4_circle.classList.add('quote_section-comment_circle-visible')
    } else{
        qsb_comment_4_circle.classList.remove('quote_section-comment_circle-visible')
    }
    
}

qsb_leftArrow.addEventListener('click', function(){

    sliderCommentCount = sliderCommentCount - 1
    
    if(sliderCommentCount<=0){
        sliderCommentCount = 4;
    }

    qsb_comment_checker()
    
    qsb_comment_circle_checker()

})

qsb_rightArrow.addEventListener('click', function(){

    sliderCommentCount = sliderCommentCount + 1
    
    if(sliderCommentCount>=5){
        sliderCommentCount = 1;
    }

    qsb_comment_checker()
    
    qsb_comment_circle_checker()

})