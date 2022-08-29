window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset;

    if(scrollTop>=40){
        header.classList.add('scrolling')
    } else if(scrollTop<=40){
        header.classList.remove('scrolling')
    }

})

/* Scroll To Top [=> click on logo] --------------------------------------------------------------------------------------------------------------------------------------------- */

const scollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
}

document.querySelector("header>nav>div:nth-child(1)").onclick = scollToTop ;

