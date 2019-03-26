var d = document.getElementById("dibujito"); //obtenemos el canva
var lienzo = d.getContext("2d"); //getContext me permite tener el contexto del area
var lineas = 30;
var L = 0;
var yi, xf;

while(L < lineas) // tambien se puede hacer con for
{   
    //plano a
    yi = 10 * L;
    xf = 10 * (L * 1);
    dibujarLinea("blue", 0, yi, xf, 300);

    //plano b
    vi = 300 - (10 * L);
    wf = 300 - (10 * L);
    dibujarLinea("red", vi, 0, 300, wf);
    
    //plano c
    ti = 10 * L;
    uf = 300 - (10 * L)
    dibujarLinea("green", ti, 300, 300, uf);

    //plano d
    ai = 10 * L;
    bf = 300 - (10 * L)
    dibujarLinea("yellow", 0, ai, bf, 0);


    L++;
}



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{

    //para empezar a dibujar
    lienzo.beginPath(); // arrancamos el trazo
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial); //colocamos posicion en x, y
    lienzo.lineTo(xfinal, yfinal); //trazamos la linea hasta x, y
    lienzo.stroke(); // cerramos linea
    lienzo.closePath(); // terminamos de dibujar


}

dibujarLinea("#AFA", 1, 1, 1, 300);
dibujarLinea("#AFA", 1, 300, 299, 299);
