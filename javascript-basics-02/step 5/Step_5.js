
let images = document.querySelectorAll("img");
// console.log(images)
images.forEach((a) => {
    a.addEventListener("mouseover", () =>{
    a.src = `images/${a.id}_2.jpg`
})
})

// let source ="";
// let str = "";
// let prev = "";

// for(let x = 0; x < 5; x++){
//         str = x.toString();
    
//         source = "..images/image" + x+"_"+x+".jpg";
//     images[x].addEventListener("mouseover", () =>{

//         images[x].setAttribute('src', source);
//         console.log(images[x].src);
//     })
// }

// "images/image2_2.jpg"