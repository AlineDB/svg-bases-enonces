let svg = document.querySelector("svg>rect:nth-child(2)");
// on peut faire en 2x quand plusieurs choses à modifier dans se cas on sélectionne d'abord le svg
//puis on part du svg pour sélectionner en faisant svg.currentTarget et l'écouteur d'événement
console.log(svg);
svg.addEventListener("mouseenter", ()=> {
    svg.style.fill = "orange";
});

svg.addEventListener("mouseleave", ()=>{
    svg.style.fill ="white";
})