let colors = document.querySelectorAll(".color");
let text = document.getElementById('text');
console.log(colors)
colors.forEach((a) => {
    a.addEventListener('click', (e)=>{
        // console.log(e.target.classList)
        if(e.target.classList[1] === 'green'){
            // console.log('clicked')
            text.style.color = 'green';
        } else if (e.target.classList[1] === 'red'){
            text.style.color = "red";
        } else
         if (e.target.classList[1] === 'blue'){
            text.style.color = "blue";
        }
    })
})