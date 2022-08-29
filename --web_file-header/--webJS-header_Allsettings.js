const header = document.querySelector('header')

const menu_btn = document.querySelector('.header-menu-btn-box')

const dp_btn_avenir = document.querySelector('.dropdown-avenir')
const dp_ul_avenir = document.querySelector('.header-dropdown-list-links-avenir')

const dp_btn_vie_lyc = document.querySelector('.dropdown-vie_lycéenne')
const dp_ul_vie_lyc = document.querySelector('.header-dropdown-list-links-vie_lycéenne')

let menuIsOpen = false;

let dp_open_avenir = false;
let dp_open_vie_lyc = false;

/* Menu btn --------------------------------------------------------------------------------------------------------------------------------------------- */

function restart(){
    dp_open_avenir=false;
    dp_open_vie_lyc=false;
    dp_ul_avenir.classList.remove('dropdown-open')    
    dp_ul_vie_lyc.classList.remove('dropdown-open')

    console.log('R E S T A R T =')
    console.log('dp_avenir & dp_vie =',dp_open_avenir, dp_open_vie_lyc)
    console.log('Menu =',menuIsOpen)
}

menu_btn.addEventListener('click', function() {

    if(!menuIsOpen) {

        header.classList.add('menu-open')
        header.classList.remove('menu-close')
        header.classList.remove('menu-close-open')

        menuIsOpen = true;

    } else {

        header.classList.remove('menu-open')
        header.classList.add('menu-close')

        menuIsOpen = false;

        if(menuIsOpen==false && dp_open_avenir==true || dp_open_vie_lyc==true) {
            header.classList.add('menu-close-open')
            header.classList.remove('menu-close')
        }
        else {
            header.classList.remove('menu-close-open')
        }
        
        setTimeout(restart,100)

    }

    console.log('dp_avenir & dp_vie =',dp_open_avenir, dp_open_vie_lyc)
    console.log('Menu =',menuIsOpen)

})

/* Dropdown (dp) --------------------------------------------------------------------------------------------------------------------------------------------- */

dp_btn_avenir.addEventListener('click', function() {

    if(!dp_open_avenir) {

        dp_ul_avenir.classList.add('dropdown-open')
        dp_open_avenir = true;

        dp_ul_vie_lyc.classList.remove('dropdown-open')
        dp_open_vie_lyc = false;

    } else {

        dp_ul_avenir.classList.remove('dropdown-open')
        dp_open_avenir = false;
    }

    console.log('dp_avenir & dp_vie =',dp_open_avenir, dp_open_vie_lyc)
    console.log('Menu =',menuIsOpen)
    
})

dp_btn_vie_lyc.addEventListener('click', function() {

    if(!dp_open_vie_lyc) {

        dp_ul_vie_lyc.classList.add('dropdown-open')
        dp_open_vie_lyc = true;

        dp_ul_avenir.classList.remove('dropdown-open')
        dp_open_avenir = false;

    } else {

        dp_ul_vie_lyc.classList.remove('dropdown-open')
        dp_open_vie_lyc = false;
    }

    console.log('dp_avenir & dp_vie =',dp_open_avenir, dp_open_vie_lyc)
    console.log('Menu =',menuIsOpen)
})
