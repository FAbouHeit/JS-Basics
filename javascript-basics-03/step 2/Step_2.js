let tags = document.querySelectorAll("a");
let text= document.querySelector('#texte')

tags.forEach((a) => {
     a.addEventListener('click', (ab)=>{
        if(ab.target.id === 'hide'){
            text.style.display = 'none' 
        // }else if(ab.target.id === 'show'){
        //     text.style.display = 'block'

    }else {
        text.style.display = 'block'
        }
    })
})