const pageViewer = document.querySelector('.header-page-section-selector').textContent
console.log(pageViewer)

const headerTitleAccueil = document.querySelector('.header-main-titles>li:nth-child(1)')
const headerTitleAvenir = document.querySelector('.header-main-titles>li:nth-child(2)')
const headerTitleVieLycéenne = document.querySelector('.header-main-titles>li:nth-child(3)')

if(pageViewer=='page-selected:accueil'){
    headerTitleAccueil.classList.add('selected_page-title')
} else {
    headerTitleAccueil.classList.remove('selected_page-title')
}

if(pageViewer=='page-selected:avenir'){
    headerTitleAvenir.classList.add('selected_page-title')
} else{
    headerTitleAvenir.classList.remove('selected_page-title')
}

if(pageViewer=='page-selected:vie-lycéenne'){
    headerTitleVieLycéenne.classList.add('selected_page-title')
} else {
    headerTitleVieLycéenne.classList.remove('selected_page-title')
}