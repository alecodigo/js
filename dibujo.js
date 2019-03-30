var d = document.getElementById("dibujito"); //obtenemos el canva
var l = document.getElementById("dibujito2"); //obtenemos el canva
var lienzo2 = l.getContext("2d");
var lienzo = d.getContext("2d"); //getContext me permite tener el contexto del area
var lineas = 30;
var lineas2 = 15;
var L = 0;
var c = 0;
var yi, xf;


esquinas();






function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{

    //para empezar a dibujar
    lienzo.beginPath(); // arrancamos el trazo
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial); //colocamos posicion en x, y
    lienzo.lineTo(xfinal, yfinal); //trazamos la linea hasta x, y
    console.log(lienzo.lineTo(xfinal, yfinal));
    lienzo.stroke(); // cerramos linea
    lienzo.closePath(); // terminamos de dibujar

}


function  dibujarLinea2(color, xinicial, yinicial, xfinal, yfinal)
{

    //para empezar a dibujar
    lienzo.beginPath(); // arrancamos el trazo
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial); //colocamos posicion en x, y
    lienzo.lineTo(xfinal, yfinal); //trazamos la linea hasta x, y
    console.log(lienzo.lineTo(xfinal, yfinal));
    lienzo.stroke(); // cerramos linea
    lienzo.closePath(); // terminamos de dibujar

}


function esquinas(){

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
        uf = 300 - (10 * L);
        dibujarLinea("blue", ti, 300, 300, uf);
        //plano d
        ai = 10 * L;
        bf = 300 - (10 * L);
        dibujarLinea("red", 0, ai, bf, 0);
    
 
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
        uf = 300 - (10 * L);
        dibujarLinea("blue", ti, 300, 300, uf);
        //plano d
        ai = 10 * L;
        bf = 300 - (10 * L);
        dibujarLinea("red", 0, ai, bf, 0);
        L++;
    }

    
    while(c < lineas2)
    {   
        //plano a
        yi = 10 * c;
        xf = 150 - (10 * c);
        dibujarLinea2("red", 150, yi, xf, 150);
        //plano b
        vi = 10 * c;
        wf = 150 + (10 * c);;
        dibujarLinea2("red", 150, vi, wf, 150);
        //plano c
        ti = 150 - (10 * c);
        uf = 300 - (10 * c);
        dibujarLinea2("blue", ti, 150, 150, uf);
        //plano d
        ai = 150 + (10 * c);
        bf = 300 - (10 * c);
        dibujarLinea2("blue", ai, 150, 150, bf);
        c++;
    }
    //Lineas frontales para darle profundidad al dibujo
    dibujarLinea2("red", 10, 150, 150, 150);
    dibujarLinea2("red", 150, 150, 290, 150);

}