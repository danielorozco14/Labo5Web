 var r = prompt("Ingrese valor del radio");
function areaCirculo(r) {
    if (r <= 0) {
        console.log("ERROR: El radio debe ser positivo")
    } else {
        var area = (3.141592) * (Math.pow(r, 2));
        
    }
    console.log(area);
}