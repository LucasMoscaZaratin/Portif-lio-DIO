const animatedbarButtons  = document.querySelectorAll('.animatedBar .buttons')

animatedbarButtons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        const animatedBar = buttons.parentElement
        const isOpen = animatedBar.classList.contains('open')

        if(isOpen){
            animatedBar.classList.remove('open')
            //animatedBar.classList = Array.of(animatedBar.classList).filter(className => className != 'open')
        }else{
            animatedBar.classList.add('open')
        }
    })
})