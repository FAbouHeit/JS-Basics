let images = document.querySelectorAll("img");
// console.log(images)
images.forEach((a) => {
    a.addEventListener("mouseover", () =>{
    a.src = `images/${a.id}_2.jpg`
})
})

images.forEach((a) => {
    a.addEventListener("mouseleave", () =>{
    a.src = `images/${a.id}.jpg`
})
})