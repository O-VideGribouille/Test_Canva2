function canva1()
{
	//Récupérer l'objet canvas par son ID
	var canvas = document.getElementById("Canvas1");
	//Créer un objet de dessin sur le canvas
	var ctx = canvas.getContext("2d");
	//Dessiner : affecter un style à l'objet dessin : le style par défaut est noir
	ctx.fillStyle = "#FF0000";
	//On dessine unrectangle avec le fillstyle précédent su le canvas
	ctx.fillRect(0, 0, 150, 100);

	//Dessiner : affecter un style à l'objet dessin : le style par défaut est noir
	ctx.fillStyle = "#00FF00";
	//On dessine un rectangle avec le fillstyle précédent sur le canvas
	ctx.fillRect(150, 100, 150, 100);




}

function canva2()
{

	var canvas=document.getElementById("Canvas2");
	var ctx = canvas.getContext("2d");
	//Se positionner en 0,0 du canvas2
	ctx.moveTo(0, 0);
	//Coordonnées du dernier point de la droite
	ctx.lineTo(300, 200);
	//Dessiner la ligne droite
	ctx.stroke();

	//Suite : Dessiner les 2 diagonales
	ctx.moveTo(0, 200);
	//Coordonnées du dernier point de la droite
	ctx.lineTo(300, 0);
	//Dessiner la ligne droite
	ctx.stroke();

	//Suite : Dessiner les deux médianes
	ctx.moveTo(0, canvas.height/2);
	//Coordonnées du dernier point de la droite
	ctx.lineTo(canvas.width/2, canvas.height);
	//Dessiner la ligne droite
	ctx.stroke();

	ctx.moveTo(canvas.width/2, 0);
	//Coordonnées du derner point de la droite
	ctx.lineTo(canvas.width/2, canvas.height);
	//Dessiner la ligne droite
	ctx.stroke();

}

function canva3()
{

	var canvas=document.getElementById("Canvas3");
	var ctx = canvas.getContext("2d");
	//démarrer le trait
	ctx.beginPath();
	/*On définit une courbe en fait. Le cercle est une courbe particulière
	arc(x,y,r,angle_départ,angle_fin)
	Pour dessiner un cercle angle_départ=0 et angle_fin=2 * Math.PI
	x et y : position du centre du cercle
	r est le rayon du cercle
	*/
	ctx.arc(canvas.width/2, canvas/2, canvas.height*0.4, 0, 2 * Math.PI);
	//gérer la couleur du trait
	ctx.strokeStyle= "#00FF00";

	//affecte l'épaisseur du trait, qui est de 1 pixel par défaut.
	ctx.lineWidth=3;
	//Dessiner le cercle
	ctx.stroke();
	//"Fermer" la forme pour revenir automatiquement au point de départ avec
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(canvas.width/2, canvas.height/2, canvas.height*0.2, 0, 2 * Math.PI);
	//Gérer la couleur du trait
	ctx.strokeStyle= "#FF0000";
	//Remplir la forme d'une couleur
	ctx.fillStyle= "darkblue";
	ctx.fill();

	//Faire une fonction qui reproduit le logo des JO

}

function canva4() 
{
	var canvas = document.getElementById("Canvas4");
	var ctx = canvas.getContext("2d");
	//créer son gradient
	var grd = ctx.createLinearGradient(0, 0, 175, 0);
	grd.addColorStop(0, "red");
	grd.addColorStop(0.7, "green");
	grd.addColorStop(1, "yellow");

	//Fill avec gradient
	ctx.fillStyle = grd;
	ctx.fillRect(20, 20, 250, 80);
}

function canva5() 
{
	var canvas = document.getElementById("Canvas5");
	var ctx = canvas.getContext("2d");
	//Créer son gradient
	var grd = ctx.createLinearGradient(150, 100, 20, 100, 150, 100);
	grd.addColorStop(0, "red");
	grd.addColorStop(1, "blue");

	//remplir avec son gradient
	ctx.fillStyle = grd;
	ctx.fillRect(10, 10, 280, 180);
}

function canva6()
{
	var canva = document.getElementById("Canvas6");
	var ctx = canva.getContext("2d");
	//Déterminer la police
	ctx.font = "50px Arial";
	ctx.fillText("Hello World", 20, 70);

	ctx.strokeText("Hello World", 20, 120);

	ctx.font = "20px Algerian";
	ctx.fillStyle = "purple";
	//ctx.TextAlign = "center";
	ctx.fillText("Largeur du canvas : " + canvas.width, 20, 170);
}

/*
function canvaX()
{
	window.onload = function() {
		var canvas = document.getElementById("Canvas7");
		var ctx = canvas.getContext("2d");
		var img = document.getElementById("marche_flottant");

		//ctx.drawImage(img, 0, 0, canva.width/2, canvas.height/2);
			ctx.drawImage(img, (canvas.width-img.width)/2, (canvas.height-img.height)/2,img.width, img.height);

			var canvas = document.getElementById("CanvasX");
			var ctx = canvas.getContext("2d");

			var img = new Image();
			img.src = 'IMG_5069.JPG';
			img.width = canvas.width/2 ;
			img.height = canvas.height/2;
			//ctx.drawingImage(img, 0, 0,canvas.width/2, canvas.heigth/2);
			ctx.drawImage(img, (canvas.width-img.width)/2, (canvas.height-img.heigth)/2, img.width, img.height);
			
				draw();
	}
}
*/

