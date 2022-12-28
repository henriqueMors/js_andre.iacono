function gerar_cor(opacidade = 0.5) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
   
}

function clicou() {
    let alt = document.getElementById("colorir")
    alt.style.backgroundColor = gerar_cor()
}
