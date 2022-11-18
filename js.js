const sociaisFooter = document.querySelectorAll('[data-anime]')


function eventoScroll(){
   const alturaPagina = window.pageYOffset + window.innerHeight * 0.95;

    sociaisFooter.forEach((element) => {
        if(alturaPagina > element.offsetTop){
            element.classList.add("animate")
        } else{
            element.classList.remove('animate')
        }
    })

}
eventoScroll()

window.addEventListener('scroll', eventoScroll)