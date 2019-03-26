var d = document.getElementById("dibujito"); //obtenemos el canva
var lienzo = d.getContext("2d"); //getContext me permite tener el contexto del area
var lineas = 30;
var l = 0;
var yi, xf;

while(l < lineas) // tambien se puede hacer con for
{
	yi = 10 * l;
	xf = 10 * (l * 1);
	dibujarLinea("#AFF", 0, yi, xf, 300);

	vi = 10 * l;
	wf = 10 * l;

	dibujarLinea("#AFF", vi, 0, 0, wf);
	console.log("Linea " + 1);
	l++;
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
