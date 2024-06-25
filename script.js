function stars() {
    let div=document.createElement('div')
    div.setAttribute('class','star')
    document.body.appendChild(div)
    div.style.left = Math.random() * + innerWidth + 'px'
    let size = Math.random() * 12
    let duration = Math.random() * 9
    div.style.fontSize=12+size+'px'
    div.style.animationDuration=2+duration+'s'
    setTimeout(function () {
        document.body.removeChild(div)
    },10000 )
    div.addEventListener("mouseover", function () {
        div.remove();
    });
}


setInterval(function () {
    stars()
}, 100)
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("mouseOver", function () {
            star.remove();
        });
    });
});