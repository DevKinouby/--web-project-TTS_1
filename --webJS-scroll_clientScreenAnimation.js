const opacity_qsCommentContainer = document.querySelector('#quote_section-comment_container');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = opacity_qsCommentContainer.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * .95){

        opacity_qsCommentContainer.classList.add('scoll_onClientScreenAnimation')

    } else {

        opacity_qsCommentContainer.classList.remove('scoll_onClientScreenAnimation')

    }
})

/*! https://youtu.be/SkheRkXbQuQ => Vidéo du code */