const contextMenu = document.querySelector(".container");
const subMenu = document.querySelector(".social-share")
document.addEventListener("contextmenu" , (e) =>{
    e.preventDefault();
    contextMenu.style.visibility = "visible";
    let mouseX = e.offsetX
    let mouseY = e.offsetY
    let winWidth = window.innerWidth;
    let cmWidth = contextMenu.offsetWidth
    let cmHeight = contextMenu.offsetHeight;
    let winHeight = window.innerHeight
    mouseX = mouseX > winWidth - cmWidth ? winWidth - cmWidth : mouseX;
    mouseY = mouseY > winHeight - cmHeight ? winHeight - cmHeight : mouseY;
    console.log(cmWidth);
    contextMenu.style.left = `${mouseX}px`
    contextMenu.style.top = `${mouseY}px`
    if(mouseX > (winWidth - cmWidth - subMenu.offsetWidth )){
        subMenu.style.left = '-100px'
    }else{
        subMenu.style.left = '270px'
    }
})  
document.addEventListener('click', () =>{
    contextMenu.style.visibility = "hidden";
})