
function canva7()
{
	window.onload = function() {
		var canvas = document.getElementById("Canvas7");
		var ctx = canvas.getContext("2d");
		//var img = document.getElementById("marche_flottant");
		var img = new Image(); //Créer un nouvel élément img
		img.addEventListener('load', function() { }, false); //exécute les instruction drawImage ici
		img.scr = 'IMG_5069.JPG' // définit le chemin de la source

		ctx.drawImage(img, 0, 0, canva.width/2, canvas.height/2);
			//ctx.drawImage(img, (canvas.width-img.width)/2, (canvas.height-img.height)/2,img.width, img.height);

			var canvas = document.getElementById("CanvasX");
			var ctx = canvas.getContext("2d");

			var img = new Image();
			img.src = 'IMG_5069.JPG';
			img.width = canvas.width/2 ;
			img.height = canvas.height/2;
			ctx.drawingImage(img, 0, 0,canvas.width/2, canvas.heigth/2);
			//ctx.drawImage(img, (canvas.width-img.width)/2, (canvas.height-img.heigth)/2, img.width, img.height);
			
				draw();
	}
}

//"data:image/" sont utilisé pour les image via une data:URL


function canvaX()
{
	window.onload = function() {
		var canvas = document.getElementById("CanvasX");
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

function canvaY()
{
		function draw() {
		var canvas = document.getElementById("CanvasY");
		var ctx = canvas.getContext("2d");
		var img = new Image();
		img.onload = function() {
				ctx.drawImage(img, 0, 0);
					//ctx.drawImage(img, 0, 0, canvas.width,canvas.height);
					ctx.beginPath();
					ctx.moveTo(30, 96);
					ctx.lineTo(70, 6);
					ctx.lineTo(103, 76);
					ctx.lineTo(170, 15);
					ctx.stroke();
					ctx.fillText("dessiner un graphique", 70, 170);
	};
	img.scr = 'backdrop.png';
}
}